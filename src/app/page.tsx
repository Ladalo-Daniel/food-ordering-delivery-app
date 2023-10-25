import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
      <Testimonial />
    </main>
  )
}
