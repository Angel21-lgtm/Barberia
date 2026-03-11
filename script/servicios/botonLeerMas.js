"use strict";

// Importando Back End de servicios
import backEndServicios from "./backEndServicios.js";

// Activación de botón leer más para solicitar el servicio

const botonLeerMas = (contenedor, botonCerar, clase, textoLeerMas, tituloLeerMas, solicitarServicio, idBoton) => {
    for (let i = 0; i < idBoton.length; i++) {
        document.getElementById(idBoton[i]).addEventListener("click", () => {
            contenedor.classList.toggle(clase);
            textoLeerMas.innerText = backEndServicios[i].textoLeerMas;
            tituloLeerMas.innerText = backEndServicios[i].encabezadoServicio;
            solicitarServicio.href = backEndServicios[i].solicitarServicio;
        });
    }

    botonCerar.addEventListener("click", () => {
        contenedor.classList.toggle(clase);
    });
}

export default botonLeerMas;