import { useState, useEffect } from "react";

export const getClockTime = (date) => {
  if (!date) {
    return null;
  }
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let clockTime = "";
  clockTime += (hours < 10 ? "0" : "") + hours;
  clockTime += (minutes < 10 ? ":0" : ":") + minutes;
  clockTime += (seconds < 10 ? ":0" : ":") + seconds;
  return clockTime;
};

export function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(getClockTime());
    const clockInterval = setInterval(() => {
      const date = new Date();
      const clockTime = getClockTime(date);
      setTime(clockTime);
    }, 250);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return time;
}
