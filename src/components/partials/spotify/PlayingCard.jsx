import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FaSpotify } from "react-icons/fa";
import {
  PlayingBars,
  PlayingCoverImage,
  PlayingDeviceInfo,
  PlayingProgressTime,
  PlayingTitleArtist,
} from "./PlayingComponents";

export const PlayingCardDesktop = ({
  song,
  isPlaying,
  isLoading,
  progress,
  duration,
  error,
}) => {
  return (
    <Card
      // className="py-4 gap-4"
      className={cn(
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <CardHeader className="px-6">
        <CardTitle className="flex items-center gap-2 text-sm">
          <FaSpotify size={18} className="text-green-500" />
          Spotify
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 px-6 w-full">
        {/* TOP SECTION */}
        <div className="flex items-start gap-3">
          {/* COVER */}
          <PlayingCoverImage
            song={song}
            isPlaying={isPlaying}
            isLoading={isLoading}
            error={error}
          />

          {/* INFO */}
          <div className="flex flex-col gap-4 overflow-hidden w-full">
            {/* DEVICE */}
            <PlayingDeviceInfo
              song={song}
              isPlaying={isPlaying}
              isLoading={isLoading}
              className="justify-start"
            />

            {/* TITLE + BARS */}
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <PlayingTitleArtist
                  song={song}
                  isPlaying={isPlaying}
                  isLoading={isLoading}
                  error={error}
                />
              </div>

              <PlayingBars isPlaying={isPlaying} />
            </div>
          </div>
        </div>

        {/* PROGRESS */}
        <PlayingProgressTime
          progress={isPlaying ? progress : 0}
          duration={isPlaying ? duration : 1}
          isLoading={false}
        />
      </CardContent>
    </Card>
  );
};

export const PlayingCardMobile = ({
  song,
  isPlaying,
  isLoading,
  progress,
  duration,
  error,
}) => {
  return (
    <Card
      className={cn(
        // light styles
        "bg-background [box-shadow:0_12px_24px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.03)]",
        // dark styles
        "dark:bg-background transform-gpu dark:[box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <CardHeader className="px-4">
        <CardTitle className="flex items-center gap-2 text-sm">
          <FaSpotify size={18} className="text-green-500" />
          Spotify
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 px-4">
        <div className="flex items-center gap-4">
          {/* COVER */}
          <PlayingCoverImage
            song={song}
            isPlaying={isPlaying}
            isLoading={isLoading}
            error={error}
            size="w-36"
          />

          <div className="space-y-2 w-full">
            <div className="flex items-center justify-between gap-4">
              {/* TITLE + ARTIST */}
              <div className="flex flex-col gap-0.5 ">
                <PlayingTitleArtist
                  song={song}
                  isPlaying={isPlaying}
                  isLoading={isLoading}
                  error={error}
                />
              </div>

              {/* ANIMATED BARS */}
              <PlayingBars isPlaying={isPlaying} />
            </div>

            {/* DURATION */}
            <PlayingProgressTime
              progress={isPlaying ? progress : 0}
              duration={isPlaying ? duration : 1}
              isLoading={false}
            />
            {/* DEVICE INFO */}
            <PlayingDeviceInfo
              song={song}
              isPlaying={isPlaying}
              isLoading={isLoading}
              className="items-start justify-start overflow-hidden w-fit whitespace-nowrap"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
