import Image from "next/image"

import LogoWSP01 from '@public/images/testimonial-01.jpg'
import TestimonialImage01 from '@/public/images/logo-wsp-01.png'

export default function LogoWSP() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <Image className="logoHeaderImage" src={TestimonialImage01} width={1200} height={60} alt="LogoWSP" />
            </div>
        </section>

    )
}