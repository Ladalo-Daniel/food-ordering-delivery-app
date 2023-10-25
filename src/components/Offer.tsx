import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

export default function Offer() {
  return (
    <div className=' flex flex-col md:flex-row h-screen md:h-[60vh] bg-black md:justify-between md:bg-[url("/offerBg.png")]'> 
      {/* TEXT CONTAINER */}
      <div className=' flex-1 text-gray-50 flex-col items-center justify-center flex gap-2  m-4'>
        <h1 className=' text-2xl text-center md:text-3xl xl:text-5xl '>Delicious Burger & French Fry</h1>
        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa consectetur impedit velit autem tenetur ut dignissimos, explicabo.</p>
        <> <CountDown /> </>
        <button className=' bg-fuchsia-100 text-fuchsia-800 py-2 px-6 rounded-lg hover:bg-fuchsia-200 '>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className=' relative flex-1 w-full items-center md:h-full'>
        <Image src="/offerProduct.png" alt='' fill className=' object-contain hover:rotate-[-5deg] duration-300' />
      </div>
    </div>
  )
}
