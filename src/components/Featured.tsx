"use client"

import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'
import Reveal from './Reveal'

export default function Featured() {
  return (
    <div className=' w-screen, overflow-x-scroll text-black'>
      {/* Container WRAPPER */}
      <Reveal>
      <div className=' w-max flex'>
        {/* SINGLE ITEM WRapper */}
        {featuredProducts.map((item) => (
        <div key={item.id} className=' w-[90vw] h-[80vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300 md:w-[40vw] xl:w-[33vw] xl:h-[80vh] shadow-fuchsia-200 shadow-inner gap-4 m-2 rounded-sm '>
          {/* IMAGE CONTAINER */}
         {item.img &&
          (<div className=' relative flex-1 items-center gap-1 w-full hover:rotate-[60deg] transition-all duration-500'>
            <Image src={item.img} alt="" fill className=' object-contain' />
          </div>)
          }
          {/* TEXT Container */}
          <div className=' flex-1  flex flex-col justify-center items-center gap-2'>
            <h1 className=' text-sm md:text-xl font-bold uppercase'>{item.title}</h1>
            <p className=' p-2 text-center'>{item.desc}</p>
            <span className=' text-lg font-bold'>${item.price}</span>
            <button className=' bg-black rounded-md text-fuchsia-50 font-bold px-4 py-1'>Add to Cart</button>
          </div>
        </div>
        ))}
      </div>
      </Reveal>
    </div>
  )
}
