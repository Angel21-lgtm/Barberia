"use strict";

// Importando variables de los archivos de los servicios
import backEndServicios from "./backEndServicios.js";

// Función para agregar los servicios y una pequeña base de datos

const servicios = (contenedor) => {
    let contenido = "";

    for(let posicion = 0; posicion <backEndServicios.longitud; posicion++) {
        contenido += `
            <div class="servicio position-relative display-flex flex-direction-column align-items-center justify-content-center">
                <div style="background-image: url(${backEndServicios.imgServicio[posicion]});" class="fondo-servicio position-absolute">
                </div>
                <div class="display-flex justify-content-center align-items-center">
                    <img src=${backEndServicios.pngServicios[posicion]} alt=${backEndServicios.alts[posicion]}>
                </div>
                <h3>${backEndServicios.encabezadoServicio[posicion]}</h3>
                <p>${backEndServicios.textoDelServicio[posicion]}</p>
                <button id=${backEndServicios.idBoton[posicion]} class="display-block position-relative">
                    Leer más
                </button>
                <h4>${backEndServicios.precios[posicion]}</h4>
            </div>
        `
    }

    contenedor.innerHTML = contenido;


}

export default servicios;