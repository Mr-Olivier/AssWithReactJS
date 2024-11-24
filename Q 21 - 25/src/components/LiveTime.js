import React, { useState, useEffect } from "react";

const TimeDisplay = React.memo(({ time }) => {
  console.log("TimeDisplay rendered!");
  return <h2 className="text-lg">Current Time: {time}</h2>;
});

const LiveTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6">
      <TimeDisplay time={time} />
    </div>
  );
};

export default LiveTime;
