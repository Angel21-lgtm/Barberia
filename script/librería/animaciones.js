"use strict";

// Animación de scroll y opacity a elementos del HTML.
// El elemento debe de tener opacidad y en la función agregar la clase para que pueda funcionar.

const scrollOpacity = (elementos, clase) => {

    let timer;

    window.addEventListener("scroll", () => {
        elementos.forEach(elemento => {
            elemento.classList.add(clase);
        });

        clearTimeout(timer);

        timer = setTimeout(() => {
            elementos.forEach(elemento => {
                elemento.classList.remove(clase);
            });
        }, 300);

    });

}

export default scrollOpacity;