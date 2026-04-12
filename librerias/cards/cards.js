// LIBRERÍA PARA  INSERTAR CARDS EN EL HTML CON SU RESPECTIVA CLASE EN CSS

"use strict";

// CARD 1
const card1 = (objeto) => {
    const contCard1 = document.getElementById("cont-card-1");

    let contenido = "";

    objeto.forEach(card => {
        contenido += `
            <div class="card-1">
                <img src="${card.srcImg}"
                    alt="Imágen representativa de los servicios ofrecidos por la barbería">
                <div class="info-card-1">
                    <h3>
                        ${card.encabezado}
                        <span></span>
                    </h3>
                    <span></span>
                    <p>${card.texto}</p>
                    <button class="boton-1">Reservar cita</button>
                </div>
            </div>
            `;
    });

    return contCard1.innerHTML = contenido;
}

export default { card1 };