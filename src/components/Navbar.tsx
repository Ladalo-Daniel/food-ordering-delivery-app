
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

export default function Navbar() {
  const user = false
  return (
    <div className=' h-14 md:h-16 text-gray-900 p-4 flex items-center justify-between border-b-2 border-b-slate-950 lg:px-20 xl:px-40'>
         {/* LEFTLINKS */}
        <div className=' hidden md:flex gap-4 flex-1 uppercase'>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
        {/* LOGO */}
        <div className=' text-xl text-zinc-950  md:font-bold  flex-1 md:text-center '>
          <Link href="/">eFood </Link>
        </div>

        {/* M0BILEMENU */}
        <div className=' md:hidden'>
          <Menu />
        </div>

          {/* RightLINKS */}
          <div className=' hidden md:flex gap-4 items-center flex-1'>
            <div className=' flex items-center gap-2 cursor-pointer bg-black px-2 rounded-sm text-white md:absolute top-3 md:right-2 lg:static'>
              <Image src="/phone.png" alt='' width={20} height={20} />
              <span>+2349000000</span>
            </div>
          { !user ? 
          (<Link href="/login">LOGIN</Link>) :
          (<Link href="/orders">ORDERS</Link>)
          }
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
    </div>
  )
}
