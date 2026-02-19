"use client";

import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/elements/Typography";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const pageTitle = "Oops! An Error Occurred";
  const pageDescription = "Sorry, an error occurred on the server.";
  const path = "/error";

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-center px-6">
        <TypographyH1 className="text-6xl font-black mb-4">500</TypographyH1>

        <TypographyH2 className="text-2xl font-semibold mb-2">
          {pageTitle}
        </TypographyH2>

        <TypographyP className="mb-6 text-muted-foreground max-w-xs text-center">
          {pageDescription}
        </TypographyP>

        <div className="flex gap-4">
          <Button variant="outline" onClick={() => reset()}>
            Try Again
          </Button>

          <Button asChild variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
