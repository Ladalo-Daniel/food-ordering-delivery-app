import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryPage() {
  return (
    <div className='flex flex-wrap text-fuchsia-500 mt-4 mb-4'>
       {pizzas.map((item) => (
         <Link href={`/product/${item.id}`} key={item.id} className=' w-[100vw] h-[60vh] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50 shadow-inner shadow-fuchsia-200'>
           {/* IMAGE CONTAINER */}
           {item.img && (
            <div className=' relative h-[80%]'>
              <Image src={item.img} alt='' fill className=' object-contain' />
            </div>
           )}
          {/* TEXT CONTAINER */}  
          <div className=' flex flex-row justify-between items-center'>
            <h1 className=' text-sm uppercase p-2 font-bold'>{item.title}</h1>
            <h2 className=' font-bold group-hover:hidden'>${item.price}</h2>
            <button className=' bg-fuchsia-500 text-white text-sm p-1 rounded-md hidden group-hover:block'>Add to Cart</button>
          </div>

         </Link>
       ) )}
    </div>
  )
}
