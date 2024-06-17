export const metadata = {
  title: 'WSP',
  description: 'Donde el futbol comienza',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Newsletter />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
