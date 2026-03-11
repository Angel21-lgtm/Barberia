"use strict";

// Animación del nav
// La función debe de tener principalmente todos los botones del nav, seguido de la clase activa, la clase inactiva y las secciones del HTML para que funcione

const nav = (botonesDelNav, claseBtnOn, claseBtnOff, secciones) => {
    let botonesDelNavNewList = [];

    botonesDelNav.forEach((elemento) => {
        if (elemento.id !== "tienda") {
            botonesDelNavNewList.push(elemento);
        }
    });

    window.addEventListener("scroll", () => {

        botonesDelNavNewList.forEach((elemento, index) => {
            if (window.scrollY > (secciones[0].clientHeight + secciones[1].clientHeight + secciones[2].clientHeight - 10)) {
                if (index !== 3) {
                    elemento.classList.remove(claseBtnOn);
                    elemento.classList.add(claseBtnOff);
                } else {
                    elemento.classList.add(claseBtnOn);
                    elemento.classList.remove(claseBtnOff);
                }
            } else if (window.scrollY > (secciones[0].clientHeight + secciones[1].clientHeight - 10)) {
                if (index !== 2) {
                    elemento.classList.remove(claseBtnOn);
                    elemento.classList.add(claseBtnOff);
                } else {
                    elemento.classList.add(claseBtnOn);
                    elemento.classList.remove(claseBtnOff);
                }
            } else if (window.scrollY > secciones[0].clientHeight - 10) {
                if (index !== 1) {
                    elemento.classList.remove(claseBtnOn);
                    elemento.classList.add(claseBtnOff);
                } else {
                    elemento.classList.add(claseBtnOn);
                    elemento.classList.remove(claseBtnOff);
                }
            } else if (window.scrollY > 1 && window.scrollY < secciones[0].clientHeight) {
                if (index !== 0) {
                    elemento.classList.remove(claseBtnOn);
                    elemento.classList.add(claseBtnOff);
                } else {
                    elemento.classList.add(claseBtnOn);
                    elemento.classList.remove(claseBtnOff);
                }
            }
        });
    });
}

export default nav;