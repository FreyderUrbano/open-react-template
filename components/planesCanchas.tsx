import Image from 'next/image'

import TestimonialImage01 from '@/public/images/cancha.jpeg'
import TestimonialImage02 from '@/public/images/cancha1.jpeg'
import TestimonialImage03 from '@/public/images/apache.jpg'
import TestimonialImage04 from '@/public/images/field.jpg'
import TestimonialImage05 from '@/public/images/cancha2.jpeg'
import TestimonialImage06 from '@/public/images/cancha3.jpg'
import TestimonialImage07 from '@/public/images/xxx.png'
import TestimonialImage08 from '@/public/images/corr.png'

export default function PlanesCanchas() {

    const imagenes = ['https://th.bing.com/th/id/R.089b16aebcfd18af6ff9c725318b65e0?rik=Ug%2fvoYlEElak8A&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.c223eb1d12de592ea513a285d9294320?rik=l7Ot2%2fASfaIyMw&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2fsizes%2f1200x675%2f1491127204-95410191gettyimages-488144002.jpg&ehk=dettdl4rxdcGYrLDeu4AYIjFzmztEQ2lT3bwX%2bcMI8U%3d&risl=&pid=ImgRaw&r=0',
        'https://www.parqueygrama.com/wp-content/uploads/2018/02/canchas-de-futbol-sinteticas-grama-de-futbol.jpg']

    const namesField = ["Monaco", "Bomberos", "Fuerte Apache", "Miraflores", "CocaCola", "Tejar"]

    const precio1 = ["$ 45.000 - $ 65.000 / hora"]
    const precio2 = ["$ 50.000 - $ 70.000 / hora"]

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/*Canchas San Juan De Pasto*/}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        {/* 1ra cancha */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="logoImage" src={TestimonialImage01} alt="logoImage" />
                                </div>
                            </div>
                            <div className='h3 mb-2' id='titletext'>{namesField[0]}</div>
                            <div className='h4 mb-2 text-center' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero  <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Promociones <span className='ml-2'>🕒</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio2}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>

                        {/* 2nd cancha */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="logoImage" src={TestimonialImage02} alt="logoImage" />
                                </div>
                            </div>
                            <div className='h3 mb-2' id='titletext'>{namesField[1]}</div>
                            <div className='h4 mb-2 text-center' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Techada <span className='ml-10'>⛱️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio1}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>

                        {/* 3ra cancha */}
                        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="logoImage" src={TestimonialImage03} alt="logoImage" />
                                </div>
                            </div>
                            <div className='h3 mb-2' id='titletext'>{namesField[2]}</div>
                            <div className='h4 mb-2 text-center' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Techada <span className='ml-10'>⛱️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio1}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
