"use client";
import { MENU_ITEMS } from "@/commons/constants/Menu";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import DockLayout from "./DockLayout";

export default function DockApp() {
  const { theme, setTheme } = useTheme();

  const handleAnchorClick = (e, href) => {
    e.preventDefault(); // Mencegah perubahan URL

    if (href === "/" || href === "#top") {
      // Scroll langsung ke atas
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 40;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <DockLayout>
      <Dock
        direction="middle"
        iconMagnification={50}
        iconDistance={100}
        className={cn(
          "pointer-events-auto relative z-50 mx-auto flex items-center rounded-full",
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
      >
        {MENU_ITEMS.Pages.map(
          (item) =>
            item?.isShow && (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "h-11 w-11 rounded-full",
                      )}
                      onClick={(e) => handleAnchorClick(e, item.href)} // <-- ini
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={8}
                    className="TooltipContent rounded-full"
                  >
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ),
        )}
        {MENU_ITEMS.Section.map(
          (item) =>
            item?.isShow && (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "h-11 w-11 rounded-full",
                      )}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={8}
                    className="TooltipContent rounded-full"
                  >
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ),
        )}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="h-11 w-11 rounded-full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <SunIcon className="size-4 dark:hidden" />
                <MoonIcon className="hidden size-4 dark:block" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={8}
              className="TooltipContent rounded-full"
            >
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </DockLayout>
  );
}
