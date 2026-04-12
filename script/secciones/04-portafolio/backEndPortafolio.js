// PEQUEÑA BASE DE DATOS DE LA SECCIÓN PORTAFOLIO

"use strict";

// Datos de los proyectos
const backEndPortafolio =
    // Primer apartado
    [[
        {
            srcImg: "./img/secciones/portafolio/proyectos/primer-apartado/militar-clasico.webp",
            alt: "Corte Militar Clásico",
            encabezado: "Militar Clásico<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-primer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
        {
            srcImg: "./img/secciones/portafolio/proyectos/primer-apartado/mohicano.webp",
            alt: "Corte Mohicano",
            encabezado: "Mohicano<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-primer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
        {
            srcImg: "./img/secciones/portafolio/proyectos/primer-apartado/mullet.webp",
            alt: "Corte Mullet",
            encabezado: "Mullet<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-primer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
    ],
    // Segundo apartado
    [
        {
            srcImg: "./img/secciones/portafolio/proyectos/segundo-apartado/pompadour.jpg",
            alt: "Corte Pompadour",
            encabezado: "Pompadour<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-segundo-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
        {
            srcImg: "./img/secciones/portafolio/proyectos/segundo-apartado/undercut.jpg",
            alt: "Corte Undercut",
            encabezado: "Undercut<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-segundo-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
    ],
    // Tercer apartado
    [
        {
            srcImg: "./img/secciones/portafolio/proyectos/tercer-apartado/bun-y-top-knot.jpg",
            alt: "Corte Bun y Top Knot",
            encabezado: "Bun y Top Knot<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-tercer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
        {
            srcImg: "./img/secciones/portafolio/proyectos/tercer-apartado/buzz.jpg",
            alt: "Corte Buzz",
            encabezado: "Buzz<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-tercer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
        {
            srcImg: "./img/secciones/portafolio/proyectos/tercer-apartado/fade.jpg",
            alt: "Corte Fade",
            encabezado: "Fade",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-tercer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
        {
            srcImg: "./img/secciones/portafolio/proyectos/tercer-apartado/francesa-clara-y-oscura.jpg",
            alt: "Corte Francesa Clara y Oscura",
            encabezado: "Francesa Clara y Oscura<span></span>",
            href: "#",
            claseProyecto: "boton-visualizar-proyecto-tercer-apartado",
            srcVideo: "./img/secciones/portafolio/proyectos/video-de-ejemplo.mp4",
        },
    ]];

// Función para agregar los datos de los proyectos al documento HTML
const innerHTMLProyectos = (contenedorPrincipal, proyectos) => {

    // Creación del contenedor
    const div = document.createElement("div");
    div.classList.add("display-flex", "flex-wrap-wrap", "justify-content-space-around");

    // Variable para almacenar el HTML
    let elementos = "";

    proyectos.forEach(proyecto => {
        elementos += `<div>
                        <img src="${proyecto.srcImg}"
                            alt="${proyecto.alt}">
                        <div class="display-flex flex-direction-column justify-content-center align-items-center">
                            <h3>
                                ${proyecto.encabezado}
                                <span></span>
                            </h3>
                            <p>
                                Contacta al creador del proyecto
                            </p>
                            <ul class="display-flex justify-content-center">
                                <li>
                                    <button class="${proyecto.claseProyecto} boton-1">
                                        Ver proyecto
                                    </button>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" class="red-social"
                                        title="Contacto direto al WhatsApp">
                                        <img src="./img/iconos/redes-sociales/whatsapp.png" alt="WhatsApp">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>`;
    });

    // Agregando los elementos al DOM
    div.innerHTML = elementos;
    contenedorPrincipal.appendChild(div);
}

export default { backEndPortafolio, innerHTMLProyectos };