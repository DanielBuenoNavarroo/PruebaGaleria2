import VideoSrc from "@/assets/videos/demo.mp4";
import { useCallback, useRef, useState } from "react";
import { Button } from "../ui/button";

const Video = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);

  const handlePlay = useCallback(() => {
    if (play) {
      video.current?.pause();
    } else {
      video.current?.play();
    }
    setPlay(!play);
  }, [play]);

  return (
    <div className="w-full flex flex-col items-center p-4 gap-4">
      <video
        ref={video}
        muted
        loop
        className="max-w-40 sm:max-w-80 lg:max-w-screen-sm xl:max-w-screen-md 2xl:max-w-screen-lg rounded-xl"
      >
        <source src={VideoSrc} type="video/mp4" />
      </video>
      <Button variant="outline" onClick={handlePlay}>
        {play ? "Pause" : "Play"}
      </Button>
    </div>
  );
};

export default Video;
