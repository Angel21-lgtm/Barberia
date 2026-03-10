"use strict";

// Importando variables de los archivos de los servicios
import backEndServiciosCards from "./backEndServicios.js";

// Función para agregar los servicios y una pequeña base de datos

const servicios = (contenedor) => {
    let contenido = "";

    for (let i = 0; i < backEndServiciosCards.length; i++) {
        contenido += `
            <div class="servicio position-relative display-flex flex-direction-column align-items-center justify-content-center">
                <div style="background-image: url(${backEndServiciosCards[i].imgServicio});" class="fondo-servicio position-absolute">
                </div>
                <div class="display-flex justify-content-center align-items-center">
                    <img src=${backEndServiciosCards[i].pngServicios} alt=${backEndServiciosCards[i].alts}>
                </div>
                <h3>${backEndServiciosCards[i].encabezadoServicio}</h3>
                <p>${backEndServiciosCards[i].textoDelServicio}</p>
                <button id=${backEndServiciosCards[i].idBoton} class="display-block position-relative btn-1">
                    Leer más
                </button>
                <h4>${backEndServiciosCards[i].precios}</h4>
            </div>
        `
    }

    contenedor.innerHTML = contenido;


}

export default servicios;