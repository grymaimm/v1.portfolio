export default function sitemap() {
  const domain = process.env.DOMAIN ?? "http://localhost:3000";

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
