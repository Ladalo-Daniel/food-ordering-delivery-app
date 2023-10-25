import Image from 'next/image'
import React from 'react'

export default function CartPage() {
  return (
    <div className=' h-[calc(100vh-6rem)] md-[calc(100vh-9rem)] flex flex-col text-black lg:flex-row mx-4'>
      {/* PRODUCTS CONTAINER */}
      <div className=' h-1/2 p-4 flex overflow-y-scroll flex-col justify-center mt-14 lg:h-full lg:w-2/3 2xl:w-1/2'>
        {/* SINGLE ITEM */}
         <div className=' flex items-center justify-between mb-4 '>
           <Image src="/temporary/p1.png" alt='' width={100} height={100} />
           <div className=''>
              <h1 className=' font-bold text-2xl uppercase text-orange-600'>Sicilian</h1>
              <span>Large</span>
           </div>
           <h2 className=' font-bold text-orange-800'>$79.90</h2>
           <span className=' cursor-pointer text-red-600'>X</span>
         </div>
        {/* SINGLE ITEM */}
         <div className=' flex items-center justify-between mb-4 '>
           <Image src="/temporary/p1.png" alt='' width={100} height={100} />
           <div className=''>
              <h1 className=' font-bold text-2xl uppercase text-orange-600'>Sicilian</h1>
              <span>Large</span>
           </div>
           <h2 className=' font-bold text-orange-800'>$79.90</h2>
           <span className=' cursor-pointer text-red-600'>X</span>
         </div>
        {/* SINGLE ITEM */}
         <div className=' flex items-center justify-between mb-4 '>
           <Image src="/temporary/p1.png" alt='' width={100} height={100} />
           <div className=''>
              <h1 className=' font-bold text-2xl uppercase text-orange-600'>Sicilian</h1>
              <span>Large</span>
           </div>
           <h2 className=' font-bold text-orange-800'>$79.90</h2>
           <span className=' cursor-pointer text-red-600'>X</span>
         </div>
        {/* SINGLE ITEM */}
         <div className=' flex items-center justify-between mb-4 '>
           <Image src="/temporary/p1.png" alt='' width={100} height={100} />
           <div className=''>
              <h1 className=' font-bold text-2xl uppercase text-orange-600'>Sicilian</h1>
              <span>Large</span>
           </div>
           <h2 className=' font-bold text-orange-800'>$79.90</h2>
           <span className=' cursor-pointer text-red-600'>X</span>
         </div>
        {/* SINGLE ITEM */}
         <div className=' flex items-center justify-between mb-4 '>
           <Image src="/temporary/p1.png" alt='' width={100} height={100} />
           <div className=''>
              <h1 className=' font-bold text-2xl uppercase text-orange-600'>Sicilian</h1>
              <span>Large</span>
           </div>
           <h2 className=' font-bold text-orange-800'>$79.90</h2>
           <span className=' cursor-pointer text-red-600'>X</span>
         </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className=' h-1/2 p-4 bg-zinc-300 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2'>
         <div className=' flex justify-between '>
            <span className=' font-bold'>Subtotal (3 items)</span>
            <span className=' text-orange-700 font-bold'>$81.70</span>
         </div>
         <div className=' flex justify-between '>
            <span className=' font-bold'>Service Cost</span>
            <span className=' text-orange-700 font-bold'>$0.00</span>
         </div>
         <div className=' flex justify-between '>
            <span className=' font-bold'>Delivery Cost</span>
            <span className=' text-green-700 font-bold'>FREE</span>
         </div>
         <hr className=' my-2' />
         <div className=' flex justify-between '>
            <span className=' font-bold'>TOTAL(INCL. VAT)</span>
            <span className=' text-orange-700 font-bold'>$81.70</span>
         </div>
         <button className=' bg-black text-white p-3 rounded-sm self-end w-1/2 lg:w-1/4 '>CHECKOUT</button>
      </div>
    </div>
  )
}
