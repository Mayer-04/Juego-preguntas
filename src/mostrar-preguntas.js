import { questions } from "./data/questions.js";

/**
 *
 * @param {number} preguntaActual
 * @param {HTMLParagraphElement} contenedorPreguntas
 */

export const mostrarPreguntas = (preguntaActual, contenedorPreguntas) => {
  const { question } = questions[preguntaActual];
  contenedorPreguntas.textContent = question;
};
