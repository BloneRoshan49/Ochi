import { motion } from 'framer-motion'
import React from 'react'

function PAGE1() {
  
  return (
    <div className='w-full h-screen flex items-center relative px-[3vw]'>
      <div className='hero text-[10vw] font-bold'>
        <div className=' leading-[7vw] pb-2'>
          <h1>WE CREATE</h1>
        </div>
        <div className=' leading-[7vw] flex items-center pb-2'>
          <motion.div initial={{width: 0}} animate={{width: "12vw"}}  transition={{ease: [0.76, 0, 0.24, 1], duration: .9, delay: 1}} className='box bg-green-500 w-[12vw] h-[8vw] mt-[1.2vw] rounded-xl object-cover overflow-hidden'>
            <motion.img initial={{x:"-100%"}} animate={{x: "0"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1}} className='w-full h-full rounded-xl' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="slide-anim" />
          </motion.div>
          <h1>EYE OPENING</h1>
        </div>
        <div className=' leading-[7vw] pb-2'>
          <h1>PRESENTATIONS</h1>
        </div>
      </div>
      <div className='border-t-2 border-zinc-200 w-full h-28 absolute bottom-0 left-0 flex justify-between px-[3vw] text-[16px]'>
        <div className='mt-4 h-10 flex justify-center items-center'>
          <h3>For public and private companies</h3>
        </div>
        <div className='mt-4 h-10 flex justify-center items-center'>
          <h3>From the first pitch to IPO</h3>
        </div>
        <div className=' rounded-full mt-4 h-10 flex justify-center items-center'> 
          <div className='p-2 border-black border-2 rounded-full'>
            <h3>START THE PROJECT</h3>
          </div>
          <span className='border-black border-2 rounded-full ml-1 h-10 w-10 flex justify-center items-center'>
          <i className="ri-arrow-right-up-line text-xl"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PAGE1