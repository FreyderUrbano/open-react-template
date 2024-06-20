"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Plan() {

    const [movImage, setmovImage] = useState(0);

    const siguienteImagen = () => {
        setmovImage((thisImagen) => (thisImagen === images.length - 1 ? 0 : thisImagen + 1));
    };

    const anteriorImagen = () => {
        setmovImage((thisImagen) => (thisImagen === 0 ? images.length - 1 : thisImagen - 1));
    };

    const title = ['Monaco', 'Fuerte Apache', 'Miraflores']

    const images = ['https://th.bing.com/th/id/R.089b16aebcfd18af6ff9c725318b65e0?rik=Ug%2fvoYlEElak8A&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.c223eb1d12de592ea513a285d9294320?rik=l7Ot2%2fASfaIyMw&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2fsizes%2f1200x675%2f1491127204-95410191gettyimages-488144002.jpg&ehk=dettdl4rxdcGYrLDeu4AYIjFzmztEQ2lT3bwX%2bcMI8U%3d&risl=&pid=ImgRaw&r=0',
        'https://www.parqueygrama.com/wp-content/uploads/2018/02/canchas-de-futbol-sinteticas-grama-de-futbol.jpg']

    const cancha = [
        { id: 1, title: title[0], url: images[0] },
        { id: 2, title: title[1], url: images[1] },
        { id: 3, title: title[2], url: images[2] }
    ]

    return (
        //AQUI ESTOY CREANDO EL SLIDER DE IMAGENES PARA MOSTRAR LAS CANCHAS MAS VISTAS 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <section className="relative pt-32 pb-10 md:pt-10 md:pb-16">
                <div className="image-container">
                    {cancha.map((image) => (
                        <div className="relative pt-32 pb-10 md:pt-10 md:pb-16" key={image.id}>
                            <h3 className="title-field" >{title[movImage]}</h3>
                            <img className="image-frame" src={images[movImage]} alt={image.title} />
                        </div>
                    ))}

                </div>
                <div className="button-css">
                    <button className="space" onClick={anteriorImagen}>Anterior</button>
                    <button onClick={siguienteImagen}>Siguiente</button>
                </div>
            </section>
        </div>
    )
}
