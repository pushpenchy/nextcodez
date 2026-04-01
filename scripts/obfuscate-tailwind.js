const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

const CONFIG = {
  filesToScan: [
    "src/**/*.{jsx,tsx,js,ts,html}",
    "pages/**/*.{jsx,tsx}",
    "components/**/*.{jsx,tsx}",
    "app/**/*.{jsx,tsx}",
    "registry/components/**/*.{jsx,tsx,js,ts}",
  ],
  excludePatterns: ["node_modules", ".next", "dist", ".git"],
  outputCssPath: "src/app/obfuscated-styles.css",
  mapFilePath: ".obfuscation-map.json",
  randomNameLength: 8,
};

// const TAILWIND_CLASS_REGEX = /className\s*=\s*["`]([\s\S]*?)["`]/g;
const TAILWIND_CLASS_REGEX =
  /\bclassName\s*=\s*(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g;
const CLASS_ATTR_REGEX = /\bclass\s*=\s*(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g;

const CN_CLASSNAME_REGEX = /\bclassName\s*=\s*\{(?:cn|clsx)\(([\s\S]*?)\)\}/g;

const STRING_LITERAL_REGEX = /(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g;

const CUSTOM_CLASSES = [
  "container-wrapper",
  "container",
  "slider_content",
  "prose",
  "rainbow-banner-gradient-1",
  "animate-border",
  "rainbow-banner-gradient-2",
  "cpu-architecture",
  "cpu-line-1",
  "slide-anime",
  "cpu-line-2",
  "data",
  "lucide",
  "cpu-line-3",
  "cpu-line-4",
  "cpu-line-5",
  "group",
  "path",
  "peer",
  "word",
  "cpu-line-6",
  "cpu-line-7",
  "cpu-line-8",
  "title-text",
  "spotlight-main",
  "spotlight-shadow",
  "overlay-noise",
  "spotlight-elipse",
  "spotlight-base",
  "spotlight-fade",
  "spotlight-left",
  "spotlight-right",
  "glass-button",
  "glass-btn",
  "gradient-wrapper",
  "mdxcard",
  "animated-btn",
  "blur-vignette",
  "animated-text",
  "slider",
  "scrollbar-none",
  "origin-top-center",
  "shiki",
  "dark",
];

const SKIP_CLASSES = [
  "rounded-rt-lg",
  "data-",
  "lucide",
  "peer",
  "data",
  "prose",
  "not-prose",
];

function generateRandomClassName() {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const chars = letters + "0123456789";
  let result = "nextcodez-uilayouts-";
  result += letters.charAt(Math.floor(Math.random() * letters.length));
  for (let i = 1; i < CONFIG.randomNameLength; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function splitTailwindClasses(str) {
  const result = [];
  let current = "";
  let bracketDepth = 0;

  for (let char of str) {
    if (char === "[") bracketDepth++;
    if (char === "]") bracketDepth--;

    if (char === " " && bracketDepth === 0) {
      if (current) result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  if (current) result.push(current);
  return result;
}

function extractTopLevelStringLiteralsFromCnArgs(source) {
  const results = [];
  let current = "";
  let parenDepth = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  let inQuote = null;
  let escaped = false;

  for (let i = 0; i < source.length; i++) {
    const ch = source[i];

    if (inQuote) {
      current += ch;

      if (escaped) {
        escaped = false;
        continue;
      }

      if (ch === "\\") {
        escaped = true;
        continue;
      }

      if (ch === inQuote) {
        inQuote = null;
      }

      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      inQuote = ch;
      current += ch;
      continue;
    }

    if (ch === "(") parenDepth++;
    if (ch === ")") parenDepth--;
    if (ch === "{") braceDepth++;
    if (ch === "}") braceDepth--;
    if (ch === "[") bracketDepth++;
    if (ch === "]") bracketDepth--;

    if (
      ch === "," &&
      parenDepth === 0 &&
      braceDepth === 0 &&
      bracketDepth === 0
    ) {
      const part = current.trim();
      if (
        (part.startsWith('"') && part.endsWith('"')) ||
        (part.startsWith("'") && part.endsWith("'")) ||
        (part.startsWith("`") && part.endsWith("`"))
      ) {
        results.push(part.slice(1, -1));
      }
      current = "";
      continue;
    }

    current += ch;
  }

  const lastPart = current.trim();
  if (
    (lastPart.startsWith('"') && lastPart.endsWith('"')) ||
    (lastPart.startsWith("'") && lastPart.endsWith("'")) ||
    (lastPart.startsWith("`") && lastPart.endsWith("`"))
  ) {
    results.push(lastPart.slice(1, -1));
  }

  return results;
}

function hasBalancedBrackets(str) {
  let depth = 0;
  for (const ch of str) {
    if (ch === "[") depth++;
    if (ch === "]") depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function shouldSkipClass(cls) {
  if (SKIP_CLASSES.includes(cls)) return true;
  if (CUSTOM_CLASSES.includes(cls)) return true;
  if (
    SKIP_CLASSES.some(
      (skip) => cls.startsWith(skip + "-") || cls.startsWith(skip + ":"),
    )
  )
    return true;
  return false;
}

function getValidClassString(classString) {
  if (!classString || classString.trim().length === 0) return null;

  const validClasses = splitTailwindClasses(classString.trim()).filter(
    (cls) => {
      if (!cls || cls.length < 2) return false;
      // if (cls.includes(",")) return false;
      if (cls.includes("`") || cls.includes("$")) return false;
      if (cls.includes("{") || cls.includes("}")) return false;
      if (cls.endsWith("-")) return false;
      if (cls.endsWith(":")) return false;
      if (shouldSkipClass(cls)) return false;
      // Allow Tailwind arbitrary value brackets
      if (!hasBalancedBrackets(cls)) return false;
      // if (cls.includes("[") && !cls.includes("]")) return false;
      // if (cls.includes("]") && !cls.includes("[")) return false;
      return true;
    },
  );

  if (validClasses.length === 0) return null;
  return validClasses.join(" ");
}

function extractClassStrings(content) {
  const classStrings = new Set();

  const processRaw = (raw) => {
    if (!raw) return;
    raw = raw.trim();
    if (!raw) return;

    const toObfuscate = splitTailwindClasses(raw)
      .filter((cls) => !shouldSkipClass(cls))
      .join(" ");

    const valid = getValidClassString(toObfuscate);
    if (valid) classStrings.add(valid);
  };

  let match;

  while ((match = TAILWIND_CLASS_REGEX.exec(content)) !== null) {
    processRaw(match[2] || "");
  }
  TAILWIND_CLASS_REGEX.lastIndex = 0;

  while ((match = CLASS_ATTR_REGEX.exec(content)) !== null) {
    processRaw(match[2] || "");
  }
  CLASS_ATTR_REGEX.lastIndex = 0;

  while ((match = CN_CLASSNAME_REGEX.exec(content)) !== null) {
    const cnArgs = match[1] || "";
    const stringLiterals = extractTopLevelStringLiteralsFromCnArgs(cnArgs);

    for (const str of stringLiterals) {
      processRaw(str);
    }
  }
  CN_CLASSNAME_REGEX.lastIndex = 0;

  return classStrings;
}

function obfuscateRawClassString(raw, mapping) {
  if (!raw) return raw;

  const parts = splitTailwindClasses(raw.trim());

  const toObfuscate = parts.filter((cls) => !shouldSkipClass(cls)).join(" ");

  const obfuscated = mapping[toObfuscate];
  if (!obfuscated) return raw;

  const keepInHtml = parts.filter((cls) => shouldSkipClass(cls)).join(" ");

  return keepInHtml ? `${obfuscated} ${keepInHtml}` : obfuscated;
}

function createClassMapping(classStrings) {
  console.log("🔐 Generating obfuscation mapping...");

  let mapping = {};
  if (fs.existsSync(CONFIG.mapFilePath)) {
    mapping = JSON.parse(fs.readFileSync(CONFIG.mapFilePath, "utf8"));
    console.log(
      `📂 Loaded existing mapping with ${Object.keys(mapping).length} entries`,
    );
  }

  const usedNames = new Set(Object.values(mapping));

  for (const classString of classStrings) {
    if (mapping[classString]) continue;

    let obfuscatedName;
    do {
      obfuscatedName = generateRandomClassName();
    } while (usedNames.has(obfuscatedName));

    usedNames.add(obfuscatedName);
    mapping[classString] = obfuscatedName;
  }

  console.log(`✅ Total mapping: ${Object.keys(mapping).length} class strings`);
  return mapping;
}

function replaceClassesInFile(filePath, mapping) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  const replaceAttr = (regex, attrName) => {
    content = content.replace(regex, (fullMatch, quote, classString) => {
      try {
        const raw = (classString || "").trim();
        if (!raw) return fullMatch;

        const replacement = obfuscateRawClassString(raw, mapping);
        if (replacement === raw) return fullMatch;

        modified = true;
        return `${attrName}=${quote}${replacement}${quote}`;
      } catch {
        return fullMatch;
      }
    });
  };

  replaceAttr(TAILWIND_CLASS_REGEX, "className");
  replaceAttr(CLASS_ATTR_REGEX, "class");

  content = content.replace(CN_CLASSNAME_REGEX, (fullMatch, cnArgs) => {
    let updatedArgs = cnArgs;
    let localModified = false;

    updatedArgs = updatedArgs.replace(
      STRING_LITERAL_REGEX,
      (strMatch, quote, value, offset, fullArgs) => {
        const before = fullArgs.slice(0, offset).trimEnd();
        const after = fullArgs.slice(offset + strMatch.length).trimStart();

        const isTopLevel =
          !before.endsWith("&&") &&
          !before.endsWith("?") &&
          !before.endsWith(":") &&
          !after.startsWith("?") &&
          !after.startsWith(":") &&
          !after.startsWith("&&");

        if (!isTopLevel) return strMatch;

        const replaced = obfuscateRawClassString(value || "", mapping);
        if (replaced !== value) {
          localModified = true;
          return `${quote}${replaced}${quote}`;
        }

        return strMatch;
      },
    );

    if (localModified) {
      modified = true;
      return fullMatch.replace(cnArgs, updatedArgs);
    }

    return fullMatch;
  });

  CN_CLASSNAME_REGEX.lastIndex = 0;

  if (modified) fs.writeFileSync(filePath, content, "utf8");
  return modified;
}

async function replaceAllClasses(mapping) {
  console.log("🔄 Replacing classes in files...");
  let replacedCount = 0;

  for (const pattern of CONFIG.filesToScan) {
    try {
      const files = await glob(pattern, {
        ignore: CONFIG.excludePatterns,
        windowsPathsNoEscape: true,
        dot: true,
      });
      for (const file of files) {
        try {
          if (replaceClassesInFile(file, mapping)) replacedCount++;
        } catch (err) {
          console.warn(`⚠️  Could not process file: ${file}`, err.message);
        }
      }
    } catch (err) {
      console.warn(`⚠️  Error with pattern ${pattern}`, err.message);
    }
  }

  console.log(`✅ Updated ${replacedCount} files`);
}

function generateMappingCss(mapping) {
  let css = "/* Auto-generated obfuscation mapping */\n";
  css += "/* DO NOT EDIT MANUALLY - regenerated on build */\n\n";
  css += '@reference "tailwindcss";\n';
  css += '@reference "./token.css";\n\n';
  // css += "@custom-variant dark (&:where(.dark, .dark *));\n\n";

  for (const [classString, obfuscatedName] of Object.entries(mapping)) {
    // Keep variant classes like dark:, hover:, md:, 2xl: in @apply
    // they work correctly when grouped together in one rule
    const validClasses = splitTailwindClasses(classString.trim())
      .filter((cls) => {
        if (!cls || cls.length < 2) return false;
        // if (cls.includes(",")) return false;
        if (cls.includes("`") || cls.includes("$")) return false;
        if (cls.includes("{") || cls.includes("}")) return false;
        if (cls.endsWith("-")) return false;
        if (cls.endsWith(":")) return false;
        if (shouldSkipClass(cls)) return false;
        // Allow Tailwind arbitrary value brackets
        if (!hasBalancedBrackets(cls)) return false;
        // if (cls.includes("[") && !cls.includes("]")) return false;
        // if (cls.includes("]") && !cls.includes("[")) return false;

        return true;
      })
      .join(" ");

    if (!validClasses) continue;

    css += `.${obfuscatedName} { @apply ${validClasses}; }\n`;
  }

  const dir = path.dirname(CONFIG.outputCssPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(CONFIG.outputCssPath, css, "utf8");
  console.log(`✅ Generated CSS file: ${CONFIG.outputCssPath}`);
}

function saveMapping(mapping) {
  fs.writeFileSync(
    CONFIG.mapFilePath,
    JSON.stringify(mapping, null, 2),
    "utf8",
  );
  console.log(`✅ Saved mapping to: ${CONFIG.mapFilePath}`);
}

function addImportToLayout() {
  const layoutPath = "src/app/layout.tsx";

  if (!fs.existsSync(layoutPath)) {
    console.warn("⚠️  layout.tsx not found, skipping import injection");
    return;
  }

  let content = fs.readFileSync(layoutPath, "utf8");
  const importLine = `import "./obfuscated-styles.css";`;

  if (content.includes(importLine)) {
    console.log("✅ Import already exists in layout.tsx");
    return;
  }

  // Inject BEFORE globals.css so Tailwind utilities always win
  if (content.includes(`import "./globals.css"`)) {
    content = content.replace(
      `import "./globals.css"`,
      `import "./obfuscated-styles.css";\nimport "./globals.css"`,
    );
  } else {
    const lastImportIndex = content.lastIndexOf("import ");
    const endOfLastImport = content.indexOf("\n", lastImportIndex);
    content =
      content.slice(0, endOfLastImport + 1) +
      importLine +
      "\n" +
      content.slice(endOfLastImport + 1);
  }

  // Update the import path to be relative to src/app
  const updatedImportLine = `import "./obfuscated-styles.css";`;
  content = content.replace(importLine, updatedImportLine);

  fs.writeFileSync(layoutPath, content, "utf8");
  console.log("✅ Added import to layout.tsx");
}

async function main() {
  try {
    console.log("\n🚀 Starting Tailwind class obfuscation...\n");

    console.log("🔍 Scanning for className strings...");
    const allClassStrings = new Set();

    for (const pattern of CONFIG.filesToScan) {
      try {
        const files = await glob(pattern, {
          ignore: CONFIG.excludePatterns,
          windowsPathsNoEscape: true,
          dot: true,
        });
        if (!Array.isArray(files)) {
          console.warn(`⚠️  Pattern ${pattern} did not return an array`);
          continue;
        }
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, "utf8");
            extractClassStrings(content).forEach((s) => allClassStrings.add(s));
          } catch (err) {
            console.warn(`⚠️  Could not read file: ${file}`);
          }
        }
      } catch (err) {
        console.warn(`⚠️  Error with pattern ${pattern}:`, err.message);
      }
    }

    console.log(`✅ Found ${allClassStrings.size} unique className strings`);

    if (allClassStrings.size === 0) {
      console.log("⚠️  No className strings found. Skipping.");
      return;
    }

    const mapping = createClassMapping(allClassStrings);
    await replaceAllClasses(mapping);
    generateMappingCss(mapping);
    saveMapping(mapping);
    addImportToLayout();

    console.log("\n✅ Obfuscation complete!\n");
    console.log(`   - Class strings mapped: ${allClassStrings.size}`);
    console.log(`   - CSS file: ${CONFIG.outputCssPath}`);
    console.log(`   - Mapping file: ${CONFIG.mapFilePath}\n`);
  } catch (err) {
    console.error("❌ Error during obfuscation:", err);
    process.exit(1);
  }
}

main();
