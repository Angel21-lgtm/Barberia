// PEQUEÑA BASE DE DATOS DE LA SECCIÓN INICIO

"use strict";

// PROMOCIONES
// Datos de las promociones
const backEndPromociones = [
    {
        imgBoton: "./img/secciones/inicio/promociones/barbero.png",
        dataTextContenedorPadre: "¡Barba y bigote $150!",
        dataTextContenedorHijo: "Lunes",
        title: "Promoción 1.",
        href: "#"
    },
    {
        imgBoton: "./img/secciones/inicio/promociones/tijeras.png",
        dataTextContenedorPadre: "¡Mascarilla $50!",
        dataTextContenedorHijo: "Martes",
        title: "Promoción 2.",
        href: "#"
    },
];

// Función propia para agregar promociones al contenedor de la sección principal
const innerHTMLPromociones = (contenedor) => {
    let contenido = "";

    backEndPromociones.forEach(promocion => {
        contenido += `
            <li data-text="${promocion.dataTextContenedorPadre}"
            class="contenedor-link-1 display-flex align-items-center justify-content-center">
                <a style="background-image: url(${promocion.imgBoton});" data-text="${promocion.dataTextContenedorHijo}" class="link-1" title="${promocion.title}" href="${promocion.href}">
                </a>
            </li>
        `;
    });

    contenedor.innerHTML = contenido;
}

export default innerHTMLPromociones;