import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'


export default function MenuPage() {
  return (
    <div className=' md:h-[calc(100vh-8rem)] flex flex-col md:flex-row p-4 lg:px-20 xl:px-40 items-center justify-center gap-2'>
       {menu.map((item) => (
        <Link 
        href={`/menu/${item.slug}`}
        key={item.id}
        className='w-full bg-cover h-1/2 p-8 md:h-[50vh] xl:h-[50vh] shadow-fuchsia-900 shadow-inner'
        style={{backgroundImage: `url(${item.img})`}}
        >
          <div className={`text-${item.color} w-1/2`}>
            <h1 className=' uppercase font-bold text-3xl'>{item.title}</h1>
            <p className=' text-sm my-4'>{item.desc}</p>
            <button className=' 2xl:block bg-fuchsia-600 text-white rounded-md py-2 px-6'>Explore</button>
          </div>
        </Link>
       ))}
    </div>
  )
}
