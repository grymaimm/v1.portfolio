import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/elements/Typography";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Oops! Page not found",
  description: "Sorry, the page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const pageTitle = "Oops! Page not found";
  const pageDescription =
    "Sorry, the page you are looking for could not be found.";
  const path = "/404";

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-center px-6">
        <TypographyH1 className="text-6xl font-black mb-4">404</TypographyH1>

        <TypographyH2 className="text-2xl font-semibold mb-2">
          {pageTitle}
        </TypographyH2>

        <TypographyP className="mb-6 text-muted-foreground max-w-xs text-center">
          {pageDescription}
        </TypographyP>

        <Button asChild variant="outline">
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </main>
    </>
  );
}
