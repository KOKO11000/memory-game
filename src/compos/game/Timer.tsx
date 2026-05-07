import React, { useEffect } from 'react'

export default function Timer() {
    const [time, setTime] = React.useState<number>(0);
    
      function formatTime(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? "0" + minutes.toFixed() : minutes.toFixed()}:${seconds < 10 ? "0" + seconds : seconds}`;
      }
    
      const timer = () => setTime(time + 1);
      useEffect(() => {
        const interval = setInterval(() => {
          timer();
        }, 1000);
        return () => clearInterval(interval);
      }, [time]);
  return (
    <div className='text-red-500 font-bold text-3xl '>{formatTime(time)}</div>
  )
}
