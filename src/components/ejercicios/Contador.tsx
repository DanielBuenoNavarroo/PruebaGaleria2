import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export const Contador = () => {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const interval = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(interval.current!);
      return;
    }

    interval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval.current!);
  }, [isPlaying]);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <h1 className="text-6xl cursor-default select-none">{time}</h1>
      <Button variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop" : "Start"}
      </Button>
    </div>
  );
};
