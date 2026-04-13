// LIBRERÍA PARA ANIMACIONES DEL CURSOR Y AL MOVER EL MOUSE

// LUZ NEON
// Función para crear un efecto de luz neón alrededor del cursor
const luzNeon = () => {
    // Creación del elemento que seguirá al cursor
    const luzNeon = document.createElement("div");
    luzNeon.classList.add("luz-neon");
    document.body.appendChild(luzNeon);

    // Creación de un span dentro del div para el efecto de luz
    const span = document.createElement("span");
    luzNeon.appendChild(span);
    span.classList.add("luz-neon-span");

    // Evento para seguir el movimiento del mouse y posicionar la luz neón
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX + 15;
        const y = e.clientY + 15;
        luzNeon.style.left = `${x}px`;
        luzNeon.style.top = `${y}px`;
    });

    // Eventos para agregar y quitar la clase de clic al presionar y soltar el mouse
    document.addEventListener("mousedown", () => {
        luzNeon.classList.add("luz-neon-click");
    });

    document.addEventListener("mouseup", () => {
        luzNeon.classList.remove("luz-neon-click");
    });
}

export default luzNeon;