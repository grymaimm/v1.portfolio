import { ImageBlur } from "@/components/elements/ImageBlur";
import { Skeleton } from "@/components/ui/skeleton";
import { formatTimeSpotify } from "@/utils/format-time";
import { motion } from "framer-motion";
import { HeadphoneOffIcon, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { TbMusicOff } from "react-icons/tb";

export const PlayingCoverImage = ({
  isPlaying,
  isLoading,
  error,
  song,
  size = "",
  iconSize = 30,
}) => {
  if (isLoading)
    return (
      <Skeleton
        className={`aspect-square sm:h-18 sm:w-18 h-25 w-25 rounded-xl`}
      />
    );

  if (!isPlaying || error)
    return (
      <div
        className={`bg-secondary/80 text-muted-foreground flex aspect-square sm:h-18 sm:w-18 h-25 w-25 items-center justify-center rounded-xl`}
      >
        <TbMusicOff size={iconSize} />
      </div>
    );

  return (
    <div className="sm:h-20 sm:w-20 h-24 w-24 aspect-square">
      <ImageBlur
        src={
          song.cover ||
          "/images/user/abstract-black-shapes-background-design_1017-31904.jpg"
        }
        alt={song.title}
        rounded="rounded-xl"
        className={`aspect-square sm:h-20 sm:w-20 h-24 w-24 rounded-xl`}
        width={100}
        height={100}
      />
    </div>
  );
};

export const PlayingTitleArtist = ({ isPlaying, isLoading, error, song }) => {
  if (isLoading)
    return (
      <div className="space-y-1.5">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-2 w-1/2" />
      </div>
    );

  if (!isPlaying || error)
    return (
      <>
        <h3 className="line-clamp-1 text-xs font-semibold text-muted-foreground">
          Spotify Idle
        </h3>
        <p className="text-muted-foreground line-clamp-1  text-[10px]">
          No songs playing
        </p>
      </>
    );

  return (
    <>
      <h3 className="line-clamp-1 text-xs font-semibold">{song.title}</h3>
      <p className="text-muted-foreground line-clamp-1 text-[10px]">
        {song.artist || "Unknown Artist"}
      </p>
    </>
  );
};

export const PlayingBars = ({ isPlaying }) => {
  const bars = [
    { h: "h-0.5", s: [1, 3, 1], d: 0 },
    { h: "h-1.5", s: [1, 2, 1], d: 0.2 },
    { h: "h-2", s: [1, 1, 1], d: 0.1 },
    { h: "h-1.5", s: [1, 2, 1], d: 0.3 },
    { h: "h-0.5", s: [1, 3, 1], d: 0.1 },
  ];

  if (!isPlaying)
    return <div className="text-muted-foreground text-[10px]">-----</div>;

  return (
    <div className="flex items-center gap-0.5 p-2 pr-0">
      {bars.map((b, i) => (
        <motion.span
          key={i}
          className={`w-0.5 ${b.h} rounded-full bg-muted-foreground`}
          animate={{ scaleY: b.s }}
          transition={{ duration: 1, repeat: Infinity, delay: b.d }}
        />
      ))}
    </div>
  );
};

export const PlayingProgressTime = ({
  progress,
  duration,
  isLoading,
  className,
}) => {
  if (isLoading)
    return (
      <div className="space-y-1">
        <Skeleton className="h-1 w-full rounded-xl" />
        <div className="flex justify-between">
          <Skeleton className="h-3 w-6" />
          <Skeleton className="h-3 w-6" />
        </div>
      </div>
    );

  return (
    <>
      <div className="space-y-1">
        <div className="bg-secondary h-1 rounded-xl overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: `${(progress / duration) * 100}%` }}
          />
        </div>
        <div className="text-muted-foreground flex justify-between text-[10px]">
          <span>{formatTimeSpotify(progress)}</span>
          <span>{formatTimeSpotify(duration)}</span>
        </div>
      </div>
    </>
  );
};

export const PlayingDeviceInfo = ({
  song,
  isPlaying,
  isLoading,
  className,
}) => {
  return (
    <div className={`flex w-full items-center justify-center ${className}`}>
      {isLoading ? (
        <Skeleton className="h-6 w-7 rounded-xl" />
      ) : isPlaying ? (
        <small className="bg-secondary/80 text-muted-foreground flex gap-1 rounded-lg px-2 py-1 text-[10px] uppercase">
          <HeadphonesIcon size={14} /> {song.device || "Unknown Device"}
        </small>
      ) : (
        <small className="bg-secondary/80 text-muted-foreground flex gap-1 rounded-lg px-2 py-1 text-[10px] uppercase">
          <HeadphoneOffIcon size={14} />
        </small>
      )}
    </div>
  );
};

export const PlaylistInfo = ({ playlist }) => {
  if (!playlist) return null;
  return (
    <div className="mt-2.5 text-[13px] opacity-70">
      <p className="m-0">
        📀 Playlist:{" "}
        <Link
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inherit"
        >
          {playlist.name}
        </Link>
      </p>
    </div>
  );
};
