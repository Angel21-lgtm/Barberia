// PEQUEÑA BASE DE DATOS DE LA SECCIÓN SOBRE NOSOTROS

"use strict";

// CARDS DE LAS SUCURSALES
// Datos de las sucursales
const backEndSucursales = [
    {
        mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.020480390165!2d-99.3366!3d19.3055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf8682a38d35d%3A0xd1f0dcade11cd38f!2sC.%20Llano%20Grande%208%2C%20La%20Pila%2C%20Cuajimalpa%20de%20Morelos%2C%2005750%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses!2smx!4v1773848006067!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        encabezadoPrincipal: "SUCURSAL 1",
        textoPrincipal: "<strong>ipsum dolor</strong> ipsum dolor sit amet consectetur, adipisicing elit.",
        title: "Ubicación de la sucursal 1.",
        href: "#",
    },
    {
        mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.020480390165!2d-99.3366!3d19.3055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf8682a38d35d%3A0xd1f0dcade11cd38f!2sC.%20Llano%20Grande%208%2C%20La%20Pila%2C%20Cuajimalpa%20de%20Morelos%2C%2005750%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses!2smx!4v1773848006067!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        encabezadoPrincipal: "SUCURSAL 2",
        textoPrincipal: "Lorem ipsum dolor sit amet consectetur, <strong>ipsum dolor</strong>.",
        title: "Ubicación de la sucursal 2.",
        href: "#",
    },
    {
        mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.020480390165!2d-99.3366!3d19.3055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf8682a38d35d%3A0xd1f0dcade11cd38f!2sC.%20Llano%20Grande%208%2C%20La%20Pila%2C%20Cuajimalpa%20de%20Morelos%2C%2005750%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses!2smx!4v1773848006067!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        encabezadoPrincipal: "SUCURSAL 3",
        textoPrincipal: "Lorem <strong>ipsum dolor</strong> sit amet consectetur, adipisicing elit.",
        title: "Ubicación de la sucursal 3.",
        href: "#",
    },
];

// Función propia para agregar las cards de las sucursales a la sección sobre nosotros
const innerHTMLCardsSucursales = (contenedor) => {
    let contenido = "";

    backEndSucursales.forEach(sucursal => {
        contenido += `<article class="display-flex align-items-center justify-content-center">
                        <div class="flex-1 display-flex align-items-center justify-content-center flex-direction-column">
                            <div class="display-flex flex-direction-column align-items-center justify-content-center">
                                ${sucursal.mapa}
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
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam <b>ipsum</b>.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 17.5,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-2.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet <b>ipsum</b> adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 20,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-3.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem <b>ipsum</b> dolor sit amet consectetur adipisicing elit. Qui deserunt id, autem quisquam dolorenisi.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 15.2,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-4.avif",
        nombreDelBarbero: "NOMBRE DEL BARBERO",
        textoDeSuPerfil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui <b>ipsum</b> id, autem quisquam dolorenisi.",
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