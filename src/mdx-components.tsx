import Image, { ImageProps } from "next/image";
import { cn } from "./lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MDXComponents } from "mdx/types";
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { CopyButton } from "./components/ui/copy-buttons";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ----------------------
    //   BASIC COMPONENTS
    // ----------------------

    img: (props: ImageProps) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),

    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn("leading-7 my-3 text-[17px] text-zinc-200", className)}
        {...props}
      />
    ),

    a: ({ href, children, ...props }) => {
      const className =
        "text-blue-400 underline underline-offset-2 hover:text-blue-300";
      if (href?.startsWith("/")) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },

    // ----------------------
    //   HEADINGS
    // ----------------------

    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-4xl font-bold tracking-tight mt-10 mb-4 text-white",
          className
        )}
        {...props}
      />
    ),

    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight mt-10 mb-3 text-white",
          className
        )}
        {...props}
      />
    ),

    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-2xl font-semibold tracking-tight mt-8 mb-2 text-white",
          className
        )}
        {...props}
      />
    ),

    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "text-xl font-semibold tracking-tight mt-6 mb-2 text-white",
          className
        )}
        {...props}
      />
    ),

    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          "text-lg font-semibold tracking-tight mt-4 mb-2 text-white",
          className
        )}
        {...props}
      />
    ),

    h6: ({ className, ...props }) => (
      <h6
        className={cn("font-semibold tracking-tight mt-3 mb-1", className)}
        {...props}
      />
    ),

    // ----------------------
    //   LISTS (fixes your ugly list spacing)
    // ----------------------

    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "list-disc pl-6 my-3 space-y-2 text-[16px] text-zinc-200",
          className
        )}
        {...props}
      />
    ),

    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "list-decimal pl-6 my-3 space-y-2 text-[16px] text-zinc-200",
          className
        )}
        {...props}
      />
    ),

    li: ({ className, ...props }) => (
      <li
        className={cn("leading-7 text-[16px] text-zinc-300", className)}
        {...props}
      />
    ),

    // ----------------------
    //   TABLES
    // ----------------------

    table: ({ className, ...props }) => (
      <div className="w-full overflow-x-auto my-6">
        <table
          className={cn("w-full border-collapse text-left text-sm", className)}
          {...props}
        />
      </div>
    ),

    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-zinc-700 bg-zinc-800 px-4 py-2 font-semibold",
          className
        )}
        {...props}
      />
    ),

    td: ({ className, ...props }) => (
      <td
        className={cn("border border-zinc-700 px-4 py-2", className)}
        {...props}
      />
    ),

    // ----------------------
    //   CODE BLOCKS
    // ----------------------

    code: ({ children, ...props }) => {
      const codeHTML = highlight(children as string);
      return (
        <code
          className="rounded bg-zinc-800 px-1 py-0.5 text-sm"
          dangerouslySetInnerHTML={{ __html: codeHTML }}
          {...props}
        />
      );
    },

    pre: ({ children, ...props }) => {
      // Extract the raw code text from <code>...</code>
      const rawCode =
        typeof children === "string"
          ? children
          : (children as any)?.props?.children ?? "";

      return (
        <div className="relative my-4">
          <CopyButton code={rawCode} />

          <pre
            className="p-4 rounded-xl bg-black border border-zinc-800 overflow-x-auto"
            {...props}
          >
            {children}
          </pre>
        </div>
      );
    },

    // ----------------------
    //   BLOCKQUOTE
    // ----------------------

    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "border-l-4 border-zinc-700 pl-4 py-2 italic my-4 text-zinc-300",
          className
        )}
        {...props}
      />
    ),

    hr: ({ className, ...props }) => (
      <hr className={cn("my-8 border-zinc-700", className)} {...props} />
    ),

    // ----------------------
    //   TABS
    // ----------------------

    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,

    ...components,
  };
}
