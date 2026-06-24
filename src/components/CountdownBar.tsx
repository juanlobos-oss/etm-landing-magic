import { useEffect, useState } from "react";

// June 30 2026 23:59 Chile time (UTC-4 in June) => 2026-07-01T03:59:00Z
const TARGET = new Date("2026-07-01T03:59:00Z").getTime();

const getRemaining = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
};

const pad = (n: number) => n.toString().padStart(2, "0");

const CountdownBar = () => {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 h-10 flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-semibold">
        <span className="hidden sm:inline">¡Últimos días para postular, no te quedes fuera!</span>
        <span className="sm:hidden">¡Últimos días!</span>
        <span className="flex items-center gap-1.5 md:gap-2 font-mono tabular-nums">
          <span><span className="font-bold">{pad(t.days)}</span><span className="opacity-75 ml-0.5">d</span></span>
          <span>:</span>
          <span><span className="font-bold">{pad(t.hours)}</span><span className="opacity-75 ml-0.5">h</span></span>
          <span>:</span>
          <span><span className="font-bold">{pad(t.minutes)}</span><span className="opacity-75 ml-0.5">m</span></span>
          <span>:</span>
          <span><span className="font-bold">{pad(t.seconds)}</span><span className="opacity-75 ml-0.5">s</span></span>
        </span>
      </div>
    </div>
  );
};

export default CountdownBar;