// Función especializada en mostrar el proyecto seleccionado

"use strict";

const visualizarProyecto = (clase, botonesVisualizarProyectos, contenedorVisualizacion, botonCerrarProyecto, datosBackEnd) => {
    const encabezado = contenedorVisualizacion.querySelector("h3");
    const video = contenedorVisualizacion.querySelector("video");
    botonesVisualizarProyectos.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            encabezado.innerHTML = datosBackEnd[index].encabezado;
            video.src = datosBackEnd[index].srcVideo;

            contenedorVisualizacion.classList.add(clase);
        });
    });

    botonCerrarProyecto.addEventListener("click", () => {
        contenedorVisualizacion.classList.remove(clase);
        encabezado.innerHTML = "";
        video.src = "";
    });
}

export default visualizarProyecto;