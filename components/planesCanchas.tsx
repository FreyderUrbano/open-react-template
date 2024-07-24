import Image from 'next/image'

import TestimonialImage01 from '@/public/images/cancha.jpeg'
import Purple from '@/public/images/purple.jpg'
import Dorado from '@/public/images/dorado.jpg'
import Naranja from '@/public/images/naranja.jpeg'
import Azul from '@/public/images/azul.jpeg'
import Negro from '@/public/images/negro.jpeg'
import Rojo from '@/public/images/rojo.jpeg'
import TestimonialImage08 from '@/public/images/corr.png'
import ModalVideo from './modal-video'

export default function PlanesCanchas() {

    {/*PRECIOS */ }
    const precioPlanVamosAJugar = 150000
    const VAJNormal = precioPlanVamosAJugar + 50000
    const precioPlanInicioPartido = 127500
    const PIPNormal = precioPlanInicioPartido + 50000
    const precioPlanMedioTiempo = 120000
    var MTNormal = precioPlanMedioTiempo + 50000
    const precioPlanCampeonato = 1440000
    var PCNormal = precioPlanCampeonato + 50000

    const precio2 = ["$ 50.000 - $ 70.000 / hora"]

    return (
        <section>
            <div className="max-w-8xl mx-auto px-6 sm:px-36">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/*Canchas San Juan De Pasto*/}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

                        {/* 1ra PLAN VAMOS A JUGAR*/}
                        <div id="prom" className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div id='vamosajugar' className='bg-amber-400 text-center rounded'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className='h-full flex-col'>
                                        <div id="vamosajugar" className='h5 mb-1 mt-1 flex-col'>PLAN VAMOS A JUGAR</div>
                                    </div>
                                    <div className='h6 mb-1 mt-2 line-through'>Precio normal $ {VAJNormal}</div>
                                    <div className='h3 mb-1 mt-2'>$  {precioPlanVamosAJugar} / mes</div>
                                    <div className='h6 mb-1 mt-2'>12 cuotas mensuales de $ 150.000 </div>
                                </div>
                            </div>
                            <div className='h3 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-white text-center'>Adicion a la web</div>
                            <div className='text-lg text-white text-center'>Soporte técnico</div>
                            <div className='text-lg text-white text-center'>Instalación</div>
                            <div className='text-lg text-white text-center'>Capacitación </div>
                            <div className='text-lg text-white text-center'>Acceso a SGR </div>
                            <div className='text-lg text-white text-center'>Tomas Fotográficas </div>
                            <div className='text-lg text-white text-center'>Acceso a sistema de puntos</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Ver todas las características</a>
                                <button className='h2 mb-0 mt-12 p-0 bg-red hover:text-gray-200 transition duration-150 ease-in-out'>EMPIEZA TU ORDEN</button>
                            </div>
                        </div>

                        {/* 2da PLAN INICIO DEL PARTIDO*/}
                        <div id="prom" className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div id="vamosajugar" className='bg-red text-center rounded'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className=''>
                                        <div id="vamosajugar" className='h5 mb-1 mt-1'>PLAN INICIO DE PARTIDO</div>
                                    </div>
                                    <div className='h6 mb-1 mt-2 line-through'>Precio normal $ {PIPNormal}</div>
                                    <div className='h3 mb-1 mt-2'>$  {precioPlanInicioPartido} / mes</div>
                                    <div className='h6 mb-1 mt-2'>4 meses luego $150.000 (5% de descuento) </div>
                                </div>
                            </div>
                            <div className='h3 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-white text-center'>Adicion a la web</div>
                            <div className='text-lg text-white text-center'>Soporte técnico</div>
                            <div className='text-lg text-white text-center'>Instalación</div>
                            <div className='text-lg text-white text-center'>Capacitación </div>
                            <div className='text-lg text-white text-center'>Acceso a SGR </div>
                            <div className='text-lg text-white text-center'>Tomas Fotográficas </div>
                            <div className='text-lg text-white text-center'>Acceso a sistema de puntos</div>
                            <div className="text-gray-700  mt-6 pt-5 border-t border-gray-700 text-center">
                                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Ver todas las características</a>
                                <button className='h2 mb-0 mt-12 p-0 bg-red hover:text-gray-200 transition duration-150 ease-in-out'>EMPIEZA TU ORDEN</button>
                            </div>
                        </div>

                        {/* 3ra PLAN MEDIO TIEMPO */}
                        <div id="prom" className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div id="vamosajugar" className='bg-blue-700 text-center rounded'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className=''>
                                        <div id="vamosajugar" className='h5 mb-1 mt-1'>PLAN MEDIO TIEMPO</div>
                                    </div>
                                    <div className='h6 mb-1 mt-2 line-through'>Precio normal $ {MTNormal}</div>
                                    <div className='h3 mb-1 mt-2'>$ {precioPlanMedioTiempo} / mes</div>
                                    <div className='h6 mb-1 mt-2'>6 meses luego $150.000 (10% de descuento)</div>
                                </div>
                            </div>
                            <div className='h3 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-white text-center'>Adicion a la web</div>
                            <div className='text-lg text-white text-center'>Soporte técnico</div>
                            <div className='text-lg text-white text-center'>Instalación</div>
                            <div className='text-lg text-white text-center'>Capacitación </div>
                            <div className='text-lg text-white text-center'>Acceso a SGR </div>
                            <div className='text-lg text-white text-center'>Tomas Fotográficas </div>
                            <div className='text-lg text-white text-center'>Acceso a sistema de puntos</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Ver todas las características</a>
                                <button className='h2 mb-0 mt-12 p-0 bg-red hover:text-gray-200 transition duration-150 ease-in-out'>EMPIEZA TU ORDEN</button>
                            </div>
                        </div>

                        {/* 4ta PLAN DE CAMPEONATO*/}
                        <div id="prom" className="flex flex-col h-full bg-gray-800" data-aos="fade-up">
                            <div id="vamosajugar" className='bg-slate-950 text-center rounded'>
                                <div className="relative inline-flex flex-col mb-4">
                                    <div className=''>
                                        <div id="vamosajugar" className='h5 mb-1 mt-1'>PLAN DE CAMPEONATO</div>
                                    </div>
                                    <div className='h6 mb-1 mt-2 line-through'>Precio normal $ {PCNormal}</div>
                                    <div className='h3 mb-1 mt-2'>$ {precioPlanCampeonato} / año</div>
                                    <div className='h6 mb-1 mt-2'>12 meses (ahorro del 20%)</div>
                                </div>
                            </div>
                            <div className='h3 mb-2 text-center mt-6' >Servicios</div>
                            <div className='text-lg text-white text-center'>Adicion a la web</div>
                            <div className='text-lg text-white text-center'>Soporte técnico</div>
                            <div className='text-lg text-white text-center'>Instalación</div>
                            <div className='text-lg text-white text-center'>Capacitación </div>
                            <div className='text-lg text-white text-center'>Acceso a SGR </div>
                            <div className='text-lg text-white text-center'>Tomas Fotográficas </div>
                            <div className='text-lg text-white text-center'>Acceso a sistema de puntos</div>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Ver todas las características</a>
                                <button className='h2 mb-0 mt-12 p-0 bg-red hover:text-gray-200 transition duration-150 ease-in-out'>EMPIEZA TU ORDEN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
