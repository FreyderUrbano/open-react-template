import Link from 'next/link';
import React from 'react';

export default function SubMenu() {

    return (
        //Aqui voy a crear un submenu para busca tu cancha, escoje fecha y Disfruta
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
                <div className="py-2 md:py-2">
                    {/* Items */}
                    <div id="borde" className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
                        {/* 1st item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <Link href="/canchas" className="relative flex flex-col items-center">
                                <img className="w-16 h-16 mb-4" src="https://pngimg.com/uploads/loupe/loupe_PNG103240.png" alt="lupa" />
                                <h4 className="h4 mb-2">Busca tu cancha</h4>
                                <p className="text-lg text-gray-400 text-center">Elige entre la gran variedad de canchas por sus servicios, por su precio o por su ubicación.</p>
                            </Link>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                            <Link href="/fechahora" className='relative flex flex-col items-center'>
                                <img className="w-16 h-16 mb-4" src="https://cdn-icons-png.flaticon.com/512/3652/3652267.png" alt="calendario" />
                                <h4 className="h4 mb-2">Escoge fecha y hora</h4>
                                <p className="text-lg text-gray-400 text-center">Elige cuando y a que hora deseas jugar tu partido y disfrutar de una mañana, tarde o noche de fútbol y amigos.</p>
                            </Link>
                        </div>
                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                            <Link href="/disfruta" className='relative flex flex-col items-center'>
                                <img className='w-16 h-16 mb-4' src="https://pngimg.com/uploads/football/football_PNG52778.png" alt='balon' />
                                <h4 className="h4 mb-2">Disfruta</h4>
                                <p className="text-lg text-gray-400 text-center">Simplemente juega, gana y luego vuelve a reservar.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}