import { useEffect, useState } from "react";

const Temporizador = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <h1 className="text-6xl cursor-default select-none">{time}</h1>
    </div>
  );
};

export default Temporizador;
