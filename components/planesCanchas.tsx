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

    {/*PRECIOS */ }
    const precioPlanVamosAJugar = 100000
    const VAJNormal = precioPlanVamosAJugar + 50000
    const precioPlanInicioPartido = 150000
    const PIPNormal = precioPlanInicioPartido + 50000
    const precioPlanMedioTiempo = 200000
    var MTNormal = precioPlanMedioTiempo + 50000
    const precioPlanCampeonato = 250000
    var PCNormal = precioPlanCampeonato + 50000

    const precio2 = ["$ 50.000 - $ 70.000 / hora"]

    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/*Canchas San Juan De Pasto*/}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

                        {/* 1ra PLAN VAMOS A JUGAR*/}
                        <div className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div className='bg-blue-800 text-center'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className='bg-red-800'>
                                        <div className='h5 mb-1 mt-1'>Plan vamos a jugar</div>
                                    </div>
                                    <div className='h5 mb-1 mt-2'>Precio normal {VAJNormal}</div>
                                    <div className='h4 mb-1 mt-2'>{precioPlanVamosAJugar}</div>
                                    <div className='h6 mb-1 mt-2'>Texto sobre el precio y el plan</div>
                                </div>
                            </div>
                            <div className='bg-blue-600'>

                            </div>

                            <div className='h4 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero  <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Promociones <span className='ml-2'>🕒</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio2}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>

                        {/* 2da PLAN INICIO DEL PARTIDO*/}
                        <div className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div className='bg-blue-800 text-center'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className='bg-red-800'>
                                        <div className='h5 mb-1 mt-1'>Plan inicio del partido</div>
                                    </div>
                                    <div className='h5 mb-1 mt-2'>Precio normal {PIPNormal}</div>
                                    <div className='h4 mb-1 mt-2'>{precioPlanInicioPartido}</div>
                                    <div className='h6 mb-1 mt-2'>Texto sobre el precio y el plan</div>
                                </div>
                            </div>
                            <div className='bg-blue-600'>

                            </div>

                            <div className='h4 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero  <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Promociones <span className='ml-2'>🕒</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio2}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>

                        {/* 3ra PLAN MEDIO TIEMPO */}
                        <div className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div className='bg-blue-800 text-center'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className='bg-red-800'>
                                        <div className='h5 mb-1 mt-1'>Plan de medio tiempo</div>
                                    </div>
                                    <div className='h5 mb-1 mt-2'>Precio normal {MTNormal}</div>
                                    <div className='h4 mb-1 mt-2'>{precioPlanMedioTiempo}</div>
                                    <div className='h6 mb-1 mt-2'>Texto sobre el precio y el plan</div>
                                </div>
                            </div>
                            <div className='bg-blue-600'>

                            </div>

                            <div className='h4 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero  <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Promociones <span className='ml-2'>🕒</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio2}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>

                        {/* 4ta PLAN DE CAMPEONATO*/}
                        <div className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div className='bg-blue-800 text-center'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className='bg-red-800'>
                                        <div className='h5 mb-1 mt-1'>Plan de campeonato</div>
                                    </div>
                                    <div className='h5 mb-1 mt-2'>Precio normal {PCNormal}</div>
                                    <div className='h4 mb-1 mt-2'>{precioPlanCampeonato}</div>
                                    <div className='h6 mb-1 mt-2'>Texto sobre el precio y el plan</div>
                                </div>
                            </div>
                            <div className='bg-blue-600'>

                            </div>

                            <div className='h4 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-gray-400 text-center'> - Parqueadero  <span className='ml-2'>🅿️</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Tienda <span className='ml-14'>🏪</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Promociones <span className='ml-2'>🕒</span></div>
                            <div className='text-lg text-gray-400 text-center'> - Y mas ....</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <cite className="text-gray-200 not-italic">{precio2}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Elegir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
