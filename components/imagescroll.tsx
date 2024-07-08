"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Imagen1 from '@/public/images/apache.jpg'

export default function ImageScroll() {

    const [movImage, setmovImage] = useState(0);

    const images = ['https://th.bing.com/th/id/R.089b16aebcfd18af6ff9c725318b65e0?rik=Ug%2fvoYlEElak8A&pid=ImgRaw&r=0',
        'https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg',
        'https://recreasport.com/wp-content/uploads/2017/04/DSCN4094.jpg']

    useEffect(() => {
        const intervalo = setInterval(() => {
            setmovImage((thisImagen) => thisImagen === images.length - 1 ? 0 : thisImagen + 1)
        }, 5000)
        return () => {
            clearInterval(intervalo)
        }
    })

    return (
        //AQUI ESTOY CREANDO EL SLIDER DE IMAGENES PARA MOSTRAR LAS CANCHAS MAS VISTAS 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <section className="relative pt-1 pb-10 md:pt-10 md:pb-16">
                <div className="image-container">
                    <div className="mt-10">
                        <img className="mt-10 imagen" src={images[movImage]} alt="imagenes" />
                    </div>
                </div>
            </section>
        </div>
    )
}
