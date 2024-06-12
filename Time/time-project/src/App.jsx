import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {



  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('az-AZ', { hour12: false });
  };

  return (
    <>
  
    <div>
      <h1>Current Time</h1>
      <p>{formatTime(time)}</p>
    </div>
    </>
  );
};




export default App
