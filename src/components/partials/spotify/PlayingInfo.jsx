"use client";
import { useSpotify } from "@/hooks/useSpotify";
import { PlayingCardDesktop, PlayingCardMobile } from "./PlayingCard";

export const PlayingInfoDesktop = () => {
  const { song, isPlaying, isLoading, progress, duration, error } =
    useSpotify();

  return (
    <PlayingCardDesktop
      song={song}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      duration={duration}
      error={error}
    />
  );
};

export const PlayingInfoMobile = () => {
  const { song, isPlaying, isLoading, progress, duration, error } =
    useSpotify();

  return (
    <PlayingCardMobile
      song={song}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      duration={duration}
      error={error}
    />
  );
};
