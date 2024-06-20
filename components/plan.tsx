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

    /*
    CREO ESTAS LISTAS DE NOMBRES DE CANCHAS Y DE FOTOS DE CANCHAS QUE LUEGO SE DEBERA TRAER DE UN API DE NUESTRA 
    PAGINA 
    */
    const title = ['Monaco', 'Fuerte Apache', 'Miraflores']

    const images = ['https://th.bing.com/th/id/R.089b16aebcfd18af6ff9c725318b65e0?rik=Ug%2fvoYlEElak8A&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.c223eb1d12de592ea513a285d9294320?rik=l7Ot2%2fASfaIyMw&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2fsizes%2f1200x675%2f1491127204-95410191gettyimages-488144002.jpg&ehk=dettdl4rxdcGYrLDeu4AYIjFzmztEQ2lT3bwX%2bcMI8U%3d&risl=&pid=ImgRaw&r=0',
        'https://www.parqueygrama.com/wp-content/uploads/2018/02/canchas-de-futbol-sinteticas-grama-de-futbol.jpg']

    return (
        //AQUI ESTOY CREANDO EL SLIDER DE IMAGENES PARA MOSTRAR LAS CANCHAS MAS VISTAS 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <section className="relative pt-32 pb-10 md:pt-10 md:pb-16">
                <div className="image-container">
                    <div className="relative pt-32 pb-10 md:pt-10 md:pb-16">
                        <h1 className="title">CANCHAS SINTETICAS</h1>
                        <h3 className="title-field" >{title[movImage]}</h3>
                        <img className="image-frame" src={images[movImage]} alt={title[movImage]} />
                    </div>
                </div>
                <div className="button-css">
                    <button onClick={anteriorImagen}>Anterior</button>
                    <button onClick={siguienteImagen}>Siguiente</button>
                </div>
            </section>
        </div>
    )
}
