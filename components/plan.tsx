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
        'https://th.bing.com/th/id/OIP.QJnYJ8HTU_562k8b_cDPvwHaE8?rs=1&pid=ImgDetMain',
        'https://www.parqueygrama.com/wp-content/uploads/2018/02/canchas-de-futbol-sinteticas-grama-de-futbol.jpg']

    return (
        //AQUI ESTOY CREANDO EL SLIDER DE IMAGENES PARA MOSTRAR LAS CANCHAS MAS VISTAS 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <section className="relative pt-4 pb-10 md:pt-10 md:pb-16">
                <div className="image-container">
                    <div className="relative pt-32 pb-10 md:pt-10 md:pb-16">
                        <h1 className="h2 mb-2 text-center">NUESTRAS CANCHAS DESTACADAS</h1>
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
