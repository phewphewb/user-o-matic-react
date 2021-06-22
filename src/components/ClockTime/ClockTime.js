import React from "react";
import { useClock } from "../../hooks";

const ClockTime = () => {
  const time = useClock();
  return <span>{time}</span>;
};

export default ClockTime;
