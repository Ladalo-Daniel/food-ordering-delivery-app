"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Always fresh & always cripsy & always hot",
    image: "/slide1.png"
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NY",
    image: "/slide2.png"
  },
  {
    id: 3,
    title: "The best pizza to share with family",
    image: "/slide3.jpg"
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
     setCurrentSlide(prev => prev === data.length - 1 ? 0 : prev + 1)
    }, 5000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className=' flex flex-col gap-8 md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:mt-1 bg-zinc-500'>
      {/* TEXTCONTAINER */}
      <div className=' flex-1 flex flex-col items-center gap-4 text-orange-400 justify-center font-bold lg:h-full'>
        <h1 className=' text-center text-lg md:text-5xl uppercase p-4 font-normal md:p-10'>
          {data[currentSlide].title}
        </h1>
        <button className=' bg-orange-700 rounded-xl p-2 text-white md:p-3'>Order Now</button>
      </div>
      {/* TEXTCONTAINER */}
      <div className=' w-full flex-1 relative lg:h-full'>
        <Image src={data[currentSlide].image} alt='' fill className=' object-cover rounded-sm' />
      </div>
    </div>
  )
}
