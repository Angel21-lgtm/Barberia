// PEQUEÑA BASE DE DATOS DE LA SECCIÓN SOBRE NOSOTROS

"use strict";

// CARDS DE LAS SUCURSALES
// Datos de las sucursales
const backEndSucursales = [
    {
        mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.020480390165!2d-99.3366!3d19.3055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf8682a38d35d%3A0xd1f0dcade11cd38f!2sC.%20Llano%20Grande%208%2C%20La%20Pila%2C%20Cuajimalpa%20de%20Morelos%2C%2005750%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses!2smx!4v1773848006067!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        encabezadoPrincipal: "Sucursal Centro",
        textoPrincipal: "Ubicada en el corazón de <strong>Ciudad de México</strong>, ideal para tu <strong>corte y arreglo de barba</strong>.",
        title: "Ir a Sucursal Centro",
        href: "#",
    },
    {
        mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.020480390165!2d-99.3366!3d19.3055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf8682a38d35d%3A0xd1f0dcade11cd38f!2sC.%20Llano%20Grande%208%2C%20La%20Pila%2C%20Cuajimalpa%20de%20Morelos%2C%2005750%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses!2smx!4v1773848006067!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        encabezadoPrincipal: "Sucursal Polanco",
        textoPrincipal: "Visítanos en <b>Polanco</b>, <strong>Ciudad de México</strong>, y disfruta de un servicio profesional y cómodo.",
        title: "Ir a Sucursal Polanco",
        href: "#",
    },
    {
        mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3687.020480390165!2d-99.3366!3d19.3055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf8682a38d35d%3A0xd1f0dcade11cd38f!2sC.%20Llano%20Grande%208%2C%20La%20Pila%2C%20Cuajimalpa%20de%20Morelos%2C%2005750%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e1!3m2!1ses!2smx!4v1773848006067!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        encabezadoPrincipal: "Sucursal Coyoacán",
        textoPrincipal: "Encuéntranos en <strong>Coyoacán</strong>, <b>Ciudad de México</b>, para cortes de cabello con estilo único.",
        title: "Ir a Sucursal Coyoacán",
        href: "#",
    },
];

// Función propia para agregar las cards de las sucursales a la sección sobre nosotros
const innerHTMLCardsSucursales = (contenedor) => {
    let contenido = "";

    backEndSucursales.forEach(sucursal => {
        contenido += `<article class="vidrio display-flex align-items-center justify-content-center">
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
                                <a rel="noopener noreferrer" target="_blank" title="${sucursal.title}" class="boton-1 position-relative">
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
        nombreDelBarbero: "CARLOS MARQUEZ",
        textoDeSuPerfil: "Carlos Marquez es un barbero especializado en <strong>cortes clásicos y modernos</strong>, conocido por su precisión y atención al detalle..",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 17.5,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-2.avif",
        nombreDelBarbero: "EDSON GUEVARA",
        textoDeSuPerfil: "Edson Guevara combina creatividad y técnica avanzada para crear <b>estilos</b> únicos que realzan la personalidad de cada <strong>cliente</strong>.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 20,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-3.avif",
        nombreDelBarbero: "NORBERTO GONZALEZ",
        textoDeSuPerfil: "Norberto Gonzalez es experto en <strong>arreglo de barba</strong> y <strong>cortes de tendencia</strong>, brindando siempre un servicio profesional y cercano.",
        hrefFacebook: "#",
        hrefInstagram: "#",
        hrefTikTok: "#",
        tiempoAnimacion: 15.2,
    },
    {
        imgBarbero: "./img/secciones/sobre-nosotros/barberos/barbero-4.avif",
        nombreDelBarbero: "EDUARDO OLVERA",
        textoDeSuPerfil: "Eduardo Olvera destaca por su atención al detalle y su pasión por ofrecer un <b>estilo moderno y elegante</b> a cada cliente.",
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
            `<div class="vidrio card-barbero display-flex flex-direction-column justify-content-center align-items-center">
                <div class="flex-1">
                    <img style="animation-duration: ${card.tiempoAnimacion}s;" class="imagen-burbuja" src="${card.imgBarbero}" alt="Foto del barbero">
                </div>
                <h4>
                    ${card.nombreDelBarbero}
                </h4>
                <p class="flex-1">
                    ${card.textoDeSuPerfil}
                </p>
                <h3>
                    Redes sociales
                    <span></span>
                </h3>
                <ul class="display-flex align-items-center justify-content-center">
                    <li class="display-flex align-items-center justify-content-center">
                        <a rel="noopener noreferrer" target="_blank" class="red-social display-flex align-items-center justify-content-center" title="Visítame en Facebook">
                            <img src="./img/iconos/redes-sociales/facebook.png" alt="Facebook">
                        </a>
                    </li>
                    <li class="display-flex align-items-center justify-content-center">
                        <a rel="noopener noreferrer" target="_blank" class="red-social display-flex align-items-center justify-content-center" title="Visítame en Instagram">
                            <img src="./img/iconos/redes-sociales/instagram.png" alt="Instagram">
                        </a>
                    </li>
                    <li class="display-flex align-items-center justify-content-center">
                        <a rel="noopener noreferrer" target="_blank" class="red-social display-flex align-items-center justify-content-center" title="Visítame en TikTok">
                            <img src="./img/iconos/redes-sociales/tiktok.png" alt="TikTok">
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