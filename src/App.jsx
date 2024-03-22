import React from 'react'
import PAGE1 from "./pages/PAGE1"
import NAVBAR from "./components/NAVBAR"
import PAGE2 from "./pages/PAGE2"
import PAGE3 from './pages/PAGE3'
import LocomotiveScroll from 'locomotive-scroll';
import PAGE4 from './pages/PAGE4'



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className='w-full' data-scroll>
      <NAVBAR/>
      <PAGE1/>
      <PAGE2/>
      <PAGE3/>
      <PAGE4/>
    </div>
    </>
  )
}

export default App