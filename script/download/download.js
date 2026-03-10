"use strict";

const download = (id, tiempoDownload, clase1, clase2, letrasEncabezadoDownload, tiempoLetras) => {
    letrasEncabezadoDownload.forEach((letra, index) => {
        setTimeout(() => {
            letra.classList.add(clase2);
        }, index * tiempoLetras);
    });

    setTimeout(() => {
        id.classList.add(clase1);
        setTimeout(() => {
            id.style.display = "none";
        }, 1000);
    }, tiempoDownload);
}

export default download;