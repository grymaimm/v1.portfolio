export const MetadataConstants = {
  creator: "Muhammad Rahim",
  title: "Muhammad Rahim",
  description:
    "Passionate about web development and enjoy creating creative and innovative solutions using modern technologies such as React, Next.js, and JavaScript, while remaining committed to continuously improving my skills and expertise.",

  keywords: [
    "Muhammad Rahim",
    "developer",
    "frontend",
    "backend",
    "web developer",
    "fullstack developer",
    "aiimmm",
    "grymaimm",
  ],

  authors: [
    {
      name: "Muhammad Rahim",
      url: process.env.DOMAIN || "http://localhost:3000",
    },
  ],

  openGraph: {
    url: process.env.DOMAIN || "http://localhost:3000",
    siteName: "Muhammad Rahim",
    locale: "id-ID",
    images: [
      {
        url: `${process.env.DOMAIN || "http://localhost:3000"}/images/og/og-default-compress.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Rahim",
      },
    ],
  },

  exTitle: "| aiimmm",

  profile: {
    image: `${process.env.DOMAIN || "http://localhost:3000"}/images/og/og-default-compress.png`,
  },
};
