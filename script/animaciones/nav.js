"use strict";

// Animación del nav

const nav = (botonesDelNav, claseBtnOn, claseBtnOff, secciones) => {
    let botonesDelNavNewList = [];

    botonesDelNav.forEach((elemento) => {
        if (elemento.id !== "tienda") {
            botonesDelNavNewList.push(elemento);
        }
    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > (secciones[0].clientHeight + secciones[1].clientHeight + secciones[2].clientHeight - 10)) {
            botonesDelNavNewList[0].classList.remove(claseBtnOn);
            botonesDelNavNewList[0].classList.add(claseBtnOff);
            botonesDelNavNewList[1].classList.add(claseBtnOff);
            botonesDelNavNewList[1].classList.remove(claseBtnOn);
            botonesDelNavNewList[2].classList.add(claseBtnOff);
            botonesDelNavNewList[2].classList.remove(claseBtnOn);
            botonesDelNavNewList[3].classList.remove(claseBtnOff);
            botonesDelNavNewList[3].classList.add(claseBtnOn);
        } else if (window.scrollY > (secciones[0].clientHeight + secciones[1].clientHeight - 10)) {
            botonesDelNavNewList[0].classList.remove(claseBtnOn);
            botonesDelNavNewList[0].classList.add(claseBtnOff);
            botonesDelNavNewList[1].classList.add(claseBtnOff);
            botonesDelNavNewList[1].classList.remove(claseBtnOn);
            botonesDelNavNewList[2].classList.remove(claseBtnOff);
            botonesDelNavNewList[2].classList.add(claseBtnOn);
            botonesDelNavNewList[3].classList.add(claseBtnOff);
            botonesDelNavNewList[3].classList.remove(claseBtnOn);
        } else if (window.scrollY > secciones[0].clientHeight - 10) {
            botonesDelNavNewList[0].classList.remove(claseBtnOn);
            botonesDelNavNewList[0].classList.add(claseBtnOff);
            botonesDelNavNewList[1].classList.remove(claseBtnOff);
            botonesDelNavNewList[1].classList.add(claseBtnOn);
            botonesDelNavNewList[2].classList.add(claseBtnOff);
            botonesDelNavNewList[2].classList.remove(claseBtnOn);
            botonesDelNavNewList[3].classList.add(claseBtnOff);
            botonesDelNavNewList[3].classList.remove(claseBtnOn);
        } else if (window.scrollY > 1 && window.scrollY < secciones[0].clientHeight) {
            botonesDelNavNewList[0].classList.add(claseBtnOn);
            botonesDelNavNewList[0].classList.remove(claseBtnOff);
            botonesDelNavNewList[1].classList.add(claseBtnOff);
            botonesDelNavNewList[1].classList.remove(claseBtnOn);
            botonesDelNavNewList[2].classList.add(claseBtnOff);
            botonesDelNavNewList[2].classList.remove(claseBtnOn);
            botonesDelNavNewList[3].classList.add(claseBtnOff);
            botonesDelNavNewList[3].classList.remove(claseBtnOn);
        }
    });
}

export default nav;