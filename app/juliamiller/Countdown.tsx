"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2025-08-30T16:30:00-04:00").getTime();

function getCountdownString(now: number) {
  const distance = weddingDate - now;

  if (distance <= 0) {
    return "Wedding countdown complete!";
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function getRandomRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());
  const [textRgb, setTextRgb] = useState("rgb(0, 0, 0)");
  const hasWeddingArrived = now >= weddingDate;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const currentTime = Date.now();

      setNow(currentTime);

      if (currentTime >= weddingDate) {
        setTextRgb(getRandomRgb());
      }
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <p
      className="text-4xl"
      id="countdown"
      style={hasWeddingArrived ? { color: textRgb } : undefined}
    >
      {getCountdownString(now)}
    </p>
  );
}
