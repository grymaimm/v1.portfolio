import { MetadataConstants } from "@/commons/constants/Metadata";
import { ThemeProvider } from "@/components/layouts/theming/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Exo_2 as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.DOMAIN || "";

export const metadata = {
  title: {
    default: "Muhammad Rahim | Fullstack Web Developer",
    template: `%s ${MetadataConstants.exTitle}`,
  },

  metadataBase: new URL(baseUrl),

  description: MetadataConstants.description,
  keywords: MetadataConstants.keywords,
  creator: MetadataConstants.creator,
  authors: MetadataConstants.authors,

  openGraph: {
    title: "Muhammad Rahim | Fullstack Web Developer",
    description: MetadataConstants.description,
    url: MetadataConstants.openGraph.url,
    siteName: MetadataConstants.openGraph.siteName,
    locale: MetadataConstants.openGraph.locale,
    type: "website",
    images: MetadataConstants.openGraph.images,
  },

  robots: {
    index: true,
    follow: true,
  },

  abstract: MetadataConstants.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
