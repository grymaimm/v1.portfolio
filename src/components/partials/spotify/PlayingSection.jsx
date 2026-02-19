"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { PlayingInfoDesktop, PlayingInfoMobile } from "./PlayingInfo";

export default function PlayingSection() {
  const { isMobile } = useIsMobile();

  return (
    <>
      {isMobile && <PlayingInfoMobile />}
      {!isMobile && <PlayingInfoDesktop />}
    </>
  );
}
