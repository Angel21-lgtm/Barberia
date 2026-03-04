"use strict";
// Importando script de carga de página web
import download from "./download/download.js";
const idDownload = document.getElementById("download");
const quitarDownload = "quitar-download";
const animacionEncabezadoDownload = "animacion-letras-encabezado-download";
const letrasEncabezadoDownload = document.querySelectorAll(".letras-encabezado-download");
// Importando función del menú desplegable
import menuDesplegable from "./inicio/menuDesplegable.js";
const idBotonMenuDesplegable = document.getElementById("boton-menu-desplegable");
const idMenu =document.getElementById("menu");
const activarMenuDesplegable = "activar-menu-desplegable";
// Importando función servicios
import servicios from "./servicios/servicios.js";
const articuloDeServicios = document.getElementById("articulo-de-servicios");
// Importando back end servicios
import backEndServicios from "./servicios/backEndServicios.js";
// Importando botón de leer en servicios
import botonLeerMas from "./servicios/botonLeerMas.js";
const idBotonesServicios = backEndServicios.idBoton;
const leerMasServicio = document.getElementById("leer-mas-servicio");
const cerrarVentanaServicio = document.getElementById("cerrar-ventana-servicio");

const main = () => {
    // Cargando página web
    window.addEventListener("load", () => {
        download(idDownload, 100, quitarDownload, animacionEncabezadoDownload, letrasEncabezadoDownload, 200);
    });

    // Activar y desactivar menú desplegable
    menuDesplegable(idBotonMenuDesplegable, idMenu, activarMenuDesplegable);

    // Agregando cards a el artículo de servicios
    servicios(articuloDeServicios);

    // Activando botones de los servicios (Leer más)
    botonLeerMas(idBotonesServicios, leerMasServicio, cerrarVentanaServicio, "activar-leer-mas-servicio");
}

main();