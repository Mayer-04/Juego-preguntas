import { preguntas } from "./data/preguntas.js";

/**
 *
 * @param {number} preguntaActual
 * @param {HTMLParagraphElement} contenedorPreguntas
 */

export const mostrarPreguntas = (preguntaActual, contenedorPreguntas) => {
  const { question } = preguntas[preguntaActual];
  contenedorPreguntas.textContent = question;
};
