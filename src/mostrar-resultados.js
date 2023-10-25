import { preguntas } from "./data/preguntas.js";

const contenedorCabecera = document.querySelector(".quiz-header");
const contenedorPreguntas = document.getElementById("question");
const contenedorRespuestas = document.querySelector("#answer");
const botonReset = document.querySelector("#reset");

/**
 *
 * @param {number} puntuacion
 */

export const mostrarResultados = (puntuacion) => {
  contenedorCabecera.classList.add("hidden");
  contenedorPreguntas.classList.add("hidden");
  contenedorRespuestas.innerHTML = `
        <p class="final-results">Preguntas completadas!</p>
        <p class="final-results">Puntuación: ${puntuacion} de ${preguntas.length}</p>
          `;
  botonReset.classList.add("show");
};
