import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'

export default function ProductDetailPage() {
  return (
    <div className=' flex p-4 lg:px-20 xl:px-40 h-screen flex-col justify-around items-center text-zinc-700 md:flex-row md:gap-4 bg-zinc-300'>
      {/* IMAGE CONTAINER */}
      <div className=' relative w-full h-1/2 md:h-[70%]'>
        {singleProduct?.img && 
        <Image 
        src={singleProduct?.img} 
        alt="" 
        className='object-contain' 
        fill />}
      </div>
      {/* TEXt CONTAINER */}
      <div className=' w-1/2 flex flex-col gap-4'>
        <h1 className=' font-bold uppercase text-3xl text-orange-600'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct?.price} id={singleProduct?.id} options={singleProduct?.options}/>
      </div>
    </div>
  )
}
