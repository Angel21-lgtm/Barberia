// PEQUEÑA BASE DE DATOS DE LA SECCIÓN SOBRE NOSOTROS

"use strict";

// CARDS DE LAS SUCURSALES
// Datos de las sucursales
const backEndSucursales = [
    {
        imgCardSucursal: "../../img/secciones/sobre-nosotros/sucursales/fondo-sucursal-1.avif",
        encabezadoPrincipal: "SUCURSAL 1",
        textoPrincipal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        title: "Ubicación de la sucursal 1.",
        href: "#",
        imgSucursal: "./img/secciones/sobre-nosotros/sucursales/sucursal-1.avif",
        alt: "Imagen sucursal 1.",
        encabezadoSecundario: "VISÍTANOS",
        textoSecundario: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        imgCardSucursal: "../../img/secciones/sobre-nosotros/sucursales/fondo-sucursal-2.avif",
        encabezadoPrincipal: "SUCURSAL 2",
        textoPrincipal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        title: "Ubicación de la sucursal 2.",
        href: "#",
        imgSucursal: "./img/secciones/sobre-nosotros/sucursales/sucursal-2.avif",
        alt: "Imagen sucursal 2.",
        encabezadoSecundario: "VISÍTANOS",
        textoSecundario: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        imgCardSucursal: "../../img/secciones/sobre-nosotros/sucursales/fondo-sucursal-3.avif",
        encabezadoPrincipal: "SUCURSAL 3",
        textoPrincipal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        title: "Ubicación de la sucursal 3.",
        href: "#",
        imgSucursal: "./img/secciones/sobre-nosotros/sucursales/sucursal-3.avif",
        alt: "Imagen sucursal 3.",
        encabezadoSecundario: "VISÍTANOS",
        textoSecundario: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
];

// Función propia para agregar las cards de las sucursales a la sección sobre nosotros
const innerHTMLCardsSucursales = (contenedor) => {
    let contenido = "";

    backEndSucursales.forEach(sucursal => {
        contenido += `<article style="background-image: url(${sucursal.imgCardSucursal});" class="display-flex align-items-center justify-content-center">
                        <div class="flex-1 display-flex align-items-center justify-content-center flex-direction-column">
                            <div class="display-flex align-items-center justify-content-center">
                                <img src="./img/iconos/logotipo/logotipo-blanco.png" alt="Logotipo.">
                            </div>
                            <h3>
                                ${sucursal.encabezadoPrincipal}
                                <span></span>
                            </h3>
                            <p>
                                ${sucursal.textoPrincipal}
                            </p>
                            <div class="display-flex align-items-center justify-content-center">
                                <a title="${sucursal.title}" href="${sucursal.href}" class="boton-1 position-relative">
                                    Ir a ubicación
                                </a>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div>
                                <img class="imgen-burbuja" src="${sucursal.imgSucursal}"
                                    alt="${sucursal.alt}">
                            </div>
                            <h4>
                                ${sucursal.encabezadoSecundario}
                            </h4>
                            <p>
                                ${sucursal.textoSecundario}
                            </p>
                        </div>
                    </article>`;
    });

    contenedor.innerHTML = contenido;
}

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
        tiempoAnimacion: 17.5,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-2.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 20,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-3.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 15.2,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-4.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 18,
    },
];

// Función propia para agregar las cards de los barberos a la sección sobre nosotros
const innerHTMLCardsBarberos = (contenedor) => {
    let contenido = "";

    backEndBarberos.forEach(card => {
        contenido +=
            `<div class="card-barbero display-flex flex-direction-column justify-content-center align-items-center">
                <div class="flex-1">
                    <img style="animation-duration: ${card.tiempoAnimacion}s;" class="imgen-burbuja" src="${card.imgBarbero}" alt="Foto de barbero.">
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
                <div>
                    <button class="boton-1 position-relative">
                        CONTACTAR
                    </button>
                </div>
            </div>`;
    });

    contenedor.innerHTML = contenido;
}

export default { innerHTMLCardsBarberos, innerHTMLCardsSucursales };