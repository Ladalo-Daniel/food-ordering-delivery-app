"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
    {id:1, title: "HomePage", url:"/"},
    {id:2, title: "Menu", url:"/menu"},
    {id:3, title: "Working Hours", url:"/"},
    {id:4, title: "Contact", url:"/"}
]

export default function Menu() {
    const [open, setOpen] = useState(false)
    const user = false;
  return (
    <div>
     {!open ?
      (<Image 
        src="/open.png" 
        alt='bars' 
        width={20} 
        height={20} 
        onClick={() => setOpen(true)} />
      ) :
      (<Image 
      src="/close.png" 
      alt='bars' 
      width={20} 
      height={20} 
      onClick={() => setOpen(false)} />
      )}

      {open &&
      <div className=' bg-zinc-900 text-white absolute top-24 left-0 w-full h-[calc(100vh-6rem)] flex justify-center items-center gap-8 flex-col text-3xl z-10'>
        {links.map(item => (
            <Link 
            className=' cursor-pointer' 
            href={item.url} 
            key={item.id}
            onClick={() => setOpen(false)}
            >{item.title}
            </Link>
        ))}

        {!user ?
        ( <Link href='/login' onClick={() => setOpen(false)} className=' cursor-pointer'>Login</Link> ) :
        ( <Link href='/orders' onClick={() => setOpen(false)}  className=' cursor-pointer'>Orders</Link> )
        }

        <Link href="/cart" onClick={() => setOpen(false)} className=' cursor-pointer'>
            <CartIcon />
        </Link>
      </div>}
    </div>
  )
}
