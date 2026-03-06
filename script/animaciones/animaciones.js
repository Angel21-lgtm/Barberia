"use strict";



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