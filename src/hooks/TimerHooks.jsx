import { useEffect, useState } from "react";

const useTimer = (time) => {
  const [seconds, setSeconds] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return seconds;
};

export default useTimer;
