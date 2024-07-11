// Planes.js (componente de React)

import MobileMenu from '@/components/ui/mobile-menu';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Plan from '@/components/plan';

import TestimonialImage01 from '@/public/images/cancha.jpeg'
import TestimonialImage02 from '@/public/images/cancha1.jpeg'
import TestimonialImage03 from '@/public/images/apache.jpg'
import ImageScroll from '@/components/imagescroll';
import MenuList from '@/components/menulist';
import PlanesCanchas from '@/components/planesCanchas';
import TituloPlanes from '@/components/tituloPlanes';

const fotos = [TestimonialImage01, TestimonialImage02, TestimonialImage03]

export default function Planes() {


    return (
        <section className="relative">
            <header className="absolute w-full z-30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div id="menu" className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="shrink-0 mr-4">
                            <Link href="/" className="block" aria-label="Cruip">
                                <img
                                    id="logo"
                                    className="w-12 h-12 mb-4"
                                    src="https://th.bing.com/th/id/R.364b60975398a4f61871734cad2d9cdc?rik=MNy6tjp94p24sQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffootball%2ffootball_PNG52790.png&ehk=ZG6T8SU5JvMgZXMrBSaXMZCKLQBBQg2PtUSlicJWKF4%3d&risl=&pid=ImgRaw&r=0"
                                    alt="Logo" />
                            </Link>
                        </div>

                        {/* Navegación de escritorio */}
                        <nav className="hidden md:flex md:grow">
                            <ul className="flex grow justify-end flex-wrap items-center">
                                <li>
                                    <Link href="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/planes" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                        Planes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                        Ingresar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                                        Registrar
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Menú móvil */}
                        {/* Agrega aquí el componente MobileMenu */}
                        <MobileMenu />
                    </div>
                </div>
            </header>
            {/*componente PAGINA PLANES */}
            <TituloPlanes />
            <PlanesCanchas />
        </section>
    );
}
