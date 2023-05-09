import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(Date.parse(targetDate) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(Date.parse(targetDate) - Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const formatTime = (time) => {
    return time.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  };

  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  let remainingTime = '';
  if (daysRemaining > 0) {
    remainingTime = `${daysRemaining}d ${formatTime(hoursRemaining)}:${formatTime(minutesRemaining)}:${formatTime(secondsRemaining)}`;
  } else if (hoursRemaining > 0) {
    remainingTime = `${hoursRemaining}h ${formatTime(minutesRemaining)}:${formatTime(secondsRemaining)}`;
  } else {
    remainingTime = `${minutesRemaining}m ${formatTime(secondsRemaining)}s`;
  }

  return (
    <div>
      <p>{remainingTime} remaining</p>
    </div>
  );
};

export default CountdownTimer;
