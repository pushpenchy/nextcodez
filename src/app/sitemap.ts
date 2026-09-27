export default async function sitemap() {
  const baseUrl = "https://nextcodez.com";
  const pages = ["", "/about", "/services", "/projects", "/contact-us"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));
}
