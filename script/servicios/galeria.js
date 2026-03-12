"use strict";

// Función para insertar cards de galería y fotos de la galería

// Importando back end de las cards de la galería
import backEndGaleriaCards from "./backEndGaleria.js";

const cardGaleria = (contenedor) => {
    let contenido = "";

    backEndGaleriaCards.forEach((elemento) => {
        contenido += `
            <div
                style="background-image: url(${elemento.fondoImg});" class="display-flex flex-direction-column position-relative justify-content-center align-items-center">
                <img src="${elemento.srcImg}" alt="${elemento.altImg}" class="display-inline-block">
                <p>${elemento.text}</p>
                <a href="${elemento.href}"
                    class="display-flex align-self-flex-start justify-content-center align-items-center position-relative btn-1">${elemento.textLink}</a>
            </div>
        `;
    });

    contenedor.innerHTML = contenido;

}

export default cardGaleria;