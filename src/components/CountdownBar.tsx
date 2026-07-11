import { useEffect, useState } from "react";

// EtMday 2026: 19 de noviembre 09:45 Chile time (CLST UTC-3) => 2026-11-19T12:45:00Z
const TARGET = new Date("2026-11-19T12:45:00Z").getTime();

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
    <div className="fixed top-16 left-0 right-0 z-40 bg-primary text-primary-foreground border-b border-primary/30">
      <div className="container mx-auto px-3 md:px-8 h-12 md:h-12 flex items-center justify-center gap-3 md:gap-5 text-sm md:text-base font-semibold">
        <span className="hidden sm:inline">Faltan para el EtMday 2026:</span>
        <span className="sm:hidden">EtMday 2026 en:</span>
        <span className="flex items-center gap-1.5 md:gap-2 font-mono tabular-nums text-base md:text-lg">
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