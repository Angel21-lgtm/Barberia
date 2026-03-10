"use strict";

// Importando Back End de servicios
import backEndServicios from "./backEndServicios.js";

// Activación de botón leer más para solicitar el servicio

const botonLeerMas = (contenedor, botonCerar, clase) => {
    for (let i = 0; i < backEndServicios.length; i++) {
        let idBoton = document.getElementById(backEndServicios[i].idBoton);
        let textoLeerMas = document.querySelector(".texto-leer-mas");
        let tituloLeerMas = document.querySelector(".titulo-leer-mas");

        idBoton.addEventListener("click", () => {
            contenedor.classList.toggle(clase);
            textoLeerMas.innerText = backEndServicios[i].textoLeerMas;
            tituloLeerMas.innerText = backEndServicios[i].tituloLeerMas;
        });
    }

    botonCerar.addEventListener("click", () => {
        contenedor.classList.toggle(clase);
    });
}

export default botonLeerMas;