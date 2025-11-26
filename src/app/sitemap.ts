export default async function sitemap() {
  const baseUrl = "https://nextcodez.com/";

  return [{ url: baseUrl, lastModified: new Date() }];
}
