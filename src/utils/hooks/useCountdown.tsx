import {useEffect, useState} from 'react';

function useCountdown() {
  const [timeCountdown, setTimeCountdown] = useState('--:--:--');
  const [isRun, setIsRun] = useState(true);

  useEffect(() => {
    const now = new Date().getTime();
    const countDownDate = new Date().setHours(11, 0, 0);

    const countDownInterval = setInterval(() => {
      const distance = countDownDate - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeCountdown(`${hours}:${minutes}:${seconds}`);

      if (distance < 0) {
        clearInterval(countDownInterval);
        setIsRun(false);
        setTimeCountdown('Hết hạn');
      }
    }, 1000);

    return () => clearInterval(countDownInterval);
  }, []);

  return {
    timeCountdown: timeCountdown,
    isRun: isRun,
  };
}

export default useCountdown;
