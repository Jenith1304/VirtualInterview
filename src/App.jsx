import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Signin from './components/Sigin';
import BlurryBackground from './components/BlurryBackground';
import Signup from './components/Signup';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2500); // Splash screen duration (2.5 seconds)
  }, []);

  return (
    <>
    <BlurryBackground/>
    {/* <Home/> */}
     {/* {loading ? <SplashScreen /> : <Home />} */}
      {/* <Signin/> */}
      <Signup/>
    </>
  )
}

export default App
