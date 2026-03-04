"use strict";
// Importando script de carga de página web
import download from "./download/download.js";
const idDownload = document.getElementById("download");
const quitarDownload = "quitar-download";
const animacionEncabezadoDownload = "animacion-letras-encabezado-download";
const letrasEncabezadoDownload = document.querySelectorAll(".letras-encabezado-download");
// Impostando función del menú desplegable
import menuDesplegable from "./inicio.js/menuDesplegable.js";
const idBotonMenuDesplegable = document.getElementById("boton-menu-desplegable");
const idMenu =document.getElementById("menu");
const activarMenuDesplegable = "activar-menu-desplegable";

const main = () => {
    // Cargando página web
    window.addEventListener("load", () => {
        download(idDownload, 100, quitarDownload, animacionEncabezadoDownload, letrasEncabezadoDownload, 200);
    });

    // Activar y desactivar menú desplegable
    menuDesplegable(idBotonMenuDesplegable, idMenu, activarMenuDesplegable);
}

main();