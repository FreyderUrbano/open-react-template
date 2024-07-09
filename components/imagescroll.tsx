"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Imagen1 from '@/public/images/apache.jpg'

export default function ImageScroll() {

    const [movImage, setmovImage] = useState(0);
    const [prevImage, setprevImage] = useState(0);
    const [nextImage, setNextImage] = useState(0);

    /**SE DEBEN TRAER IMAGENES DE UNA API CREADA PARA LA PAGINA */
    const images = [
        'https://th.bing.com/th/id/R.089b16aebcfd18af6ff9c725318b65e0?rik=Ug%2fvoYlEElak8A&pid=ImgRaw&r=0',
        'https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg',
        'https://recreasport.com/wp-content/uploads/2017/04/DSCN4094.jpg',
        "https://www.fcbarcelona.com/fcbarcelona/photo/2019/03/26/82d3ddd1-7ad4-4cb8-b54d-c03472d0acd4/zZstShtl.jpg",
        'https://1.bp.blogspot.com/-pDLFs2oXGKo/Vs04LBK33MI/AAAAAAAAALs/2pgCBs2we9Y/s1600/Ronaldinho.jpg',
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3125544effd09308/639f60c65d0ea95c1ee0e6c3/GettyImages-1450106798.jpg',
        'https://images.daznservices.com/di/library/sporting_news/c0/3a/lionel-messi-argentina-copa-america_o2jev5dgyuwe1x1vmxku0o4im.jpg?t=1574793978&w=width&quality=80',
        'https://www.prensalibre.com/wp-content/uploads/2019/06/FBL-EUR-NATIONS-POR-NED_45213397.jpg?quality=82'
    ]

    const showPreviousImage = () => {
        setprevImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const showNextImage = () => {
        setNextImage((nextImage) => (nextImage === images.length - 1 ? 0 : nextImage + 1));
    }

    useEffect(() => {
        const left = setInterval(() => {
            setprevImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))
        }, 6000)
        return () => {
            clearInterval(left)
        }
    }, [prevImage]);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setmovImage((thisImagen) => thisImagen === images.length - 1 ? 0 : thisImagen + 1)
        }, 8000)
        return () => {
            clearInterval(intervalo)
        }
    }, [])

    useEffect(() => {
        const right = setInterval(() => {
            setNextImage((nextImage) => (nextImage === images.length - 1 ? 0 : nextImage + 1))
        }, 6000)
        return () => {
            clearInterval(right)
        }
    }, [nextImage])

    return (
        //AQUI ESTOY CREANDO EL SLIDER DE IMAGENES PARA MOSTRAR LAS CANCHAS MAS VISTAS 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <section className="relative pt-30 pb-30 md:pt-10 md:pb-16">
                <div className="image-container flex justify-center items-center">
                    <div className="imgLeft">
                        <img className="imgLeft" src={images[prevImage]} alt="img" />
                    </div>

                    <div className="mt-10 bg-no-repeat bg-center">
                        <img className="mt-12 imagen rounded-2xl" src={images[movImage]} alt="imagenes" />
                    </div>
                    <div className="imgRight">
                        <img className="imgRight" src={images[nextImage]} alt="img" />
                    </div>
                </div>
            </section>
        </div>
    )
}
