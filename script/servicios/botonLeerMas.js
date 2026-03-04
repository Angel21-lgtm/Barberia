"use strict";

// Activación de botón leer más para solicitar el servicio

const botonLeerMas = (botones, contenedor, botonCerar, clase) => {
    botones.forEach(boton => {
        let idBoton = document.getElementById(boton);
        idBoton.addEventListener("click", () => {
            contenedor.classList.toggle(clase);
        });
    });

    botonCerar.addEventListener("click", () => {
        contenedor.classList.toggle(clase);
    });
}

export default botonLeerMas;