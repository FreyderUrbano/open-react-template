export const metadata = {
  title: 'WSP',
  description: 'Donde el futbol comienza',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Planes from '@/components/planes'
import Plan from '@/components/plan'
import Menu from '@/components/menu'

export default function Home() {
  return (
    <>
      {/*<Hero />*/}
     
      <Menu />
      <Plan />
      {/*<Planes />*/}
      <Newsletter />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
