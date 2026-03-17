// PEQUEÑA BASE DE DATOS DE LA SECCIÓN SOBRE NOSOTROS

"use strict";

// CARDS DE LOS BARBEROS
// Datos de las cards
const backEndBarberos = [
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-1.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 8 + Math.round() * 1.5,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-2.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 8 + Math.round() * 1.1,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-3.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 8 + Math.round() * 1.8,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-4.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 8 + Math.round() * 2,
    },
];

// Función propia para agregar las cards de los barberos a la sección sobre nosotros
const innerHTMLCardsBarberos = (contenedor) => {
    let contenido = "";

    backEndBarberos.forEach(card => {
        contenido +=
            `<div class="card-barbero display-flex flex-direction-column justify-content-center align-items-center">
                <div class="flex-1">
                    <img style="animation-duration: ${card.tiempoAnimacion};" class="imgen-burbuja" src="${card.imgBarbero}" alt="Foto de barbero.">
                </div>
                <h4>
                    ${card.nombreDelBarbero}
                </h4>
                <p class="flex-1">
                    ${card.textoDeSuPerfil}
                </p>
                <h3>
                    REDES SOCIALES
                    <span></span>
                </h3>
                <ul class="display-flex align-items-center justify-content-center">
                    <li class="display-flex align-items-center justify-content-center">
                        <a class="red-social display-flex align-items-center justify-content-center" title="¡Visítame en Facebook!" href="${card.hrefFacebook}">
                            <img src="./img/iconos/redes-sociales/facebook-naranja.png" alt="Facebook.">
                        </a>
                    </li>
                    <li class="display-flex align-items-center justify-content-center">
                        <a class="red-social display-flex align-items-center justify-content-center" title="¡Visítame en Instagram!" href="${card.hrefInstagram}">
                            <img src="./img/iconos/redes-sociales/instagram-naranja.png" alt="Instagram.">
                        </a>
                    </li>
                    <li class="display-flex align-items-center justify-content-center">
                        <a class="red-social display-flex align-items-center justify-content-center" title="¡Visítame en TikTok!" href="${card.hrefTikTok}">
                            <img src="./img/iconos/redes-sociales/tiktok-naranja.png" alt="TikTok.">
                        </a>
                    </li>
                </ul>
            </div>`;
    });

    contenedor.innerHTML = contenido;
}

export default innerHTMLCardsBarberos;