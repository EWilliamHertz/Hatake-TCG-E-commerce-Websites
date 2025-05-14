import React, { useEffect, useState } from 'react';
interface CountdownTimerProps {
  targetDate: string;
}
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isReleased, setIsReleased] = useState(false);
  // Set current date as May 14, 2025, 07:52 PM CEST for timer calculations
  const currentDate = new Date('2025-05-14T19:52:00+02:00');
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - currentDate.getTime();
      if (difference <= 0) {
        setIsReleased(true);
        return null;
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    };
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);
    // Simulate time passing for the countdown
    const timer = setTimeout(() => {
      currentDate.setSeconds(currentDate.getSeconds() + 1);
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [targetDate, timeLeft, currentDate]);
  if (isReleased) {
    return <div className="text-green-600 font-medium">Available Now!</div>;
  }
  if (!timeLeft) {
    return <div>Loading...</div>;
  }
  return <div className="flex flex-col">
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
        Releases in:
      </p>
      <div className="flex space-x-2 text-sm">
        <div className="flex flex-col items-center">
          <span className="font-bold">{timeLeft.days}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{timeLeft.hours}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            hours
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{timeLeft.minutes}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{timeLeft.seconds}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">sec</span>
        </div>
      </div>
    </div>;
};