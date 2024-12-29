import { useEffect, useState } from "react";

//Controla el tiempo de la página de inicio antes de su redirección
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
