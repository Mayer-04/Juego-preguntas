import { questions } from "./data/questions.js";

/**
 *
 * @param {number} preguntaActual
 * @param {HTMLDivElement} contenedorRespuestas
 * @param {() => void} obtenerBotones
 */

export const mostrarRespuestas = (
  preguntaActual,
  contenedorRespuestas,
  obtenerBotones
) => {
  const { answers } = questions[preguntaActual];
  const botones = answers
    .map((pregunta) => `<button class="answer-button">${pregunta}</button>`)
    .join(" ");

  contenedorRespuestas.innerHTML = botones;

  obtenerBotones();
};
