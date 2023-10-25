import "./style.css";
import { preguntas } from "./src/data/preguntas.js";
import { mostrarPreguntas } from "./src/mostrar-preguntas.js";
import { mostrarRespuestas } from "./src/mostrar-respuestas.js";
import { mostrarResultados } from "./src/mostrar-resultados";

const contenedorCabecera = document.querySelector(".quiz-header");
const contenedorPreguntas = document.getElementById("question");
const contenedorRespuestas = document.querySelector("#answer");
const puntuacionFinal = document.querySelector("#score");
const botonReset = document.querySelector("#reset");

let puntuacion = 0;
let preguntaActual = 0;

const renderApp = () => {
  mostrarPreguntas(preguntaActual, contenedorPreguntas);
  mostrarRespuestas(preguntaActual, contenedorRespuestas, obtenerBotones);
};

const obtenerBotones = () => {
  const botones = contenedorRespuestas.querySelectorAll("button");

  botones.forEach((boton, index) => {
    boton.addEventListener("click", () => checkRespuesta(index));
  });
};

/**
 *
 * @param {number} index
 */

const checkRespuesta = (index) => {
  const respuestaCorrecta = index === preguntas[preguntaActual].correct;
  const seleccionarBoton = contenedorRespuestas.querySelector(
    `button:nth-child(${index + 1})`
  );
  seleccionarBoton.classList.add(respuestaCorrecta ? "correct" : "incorrect");

  puntuacion += respuestaCorrecta;

  pasarPregunta();
};

const pasarPregunta = () => {
  const TIME_OUT = 500;
  setTimeout(() => {
    contenedorRespuestas.innerHTML = "";
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      renderApp();
    } else {
      mostrarResultados(puntuacion);
    }
    puntuacionFinal.textContent = `Puntuación: ${puntuacion}`;
  }, TIME_OUT);
};

const resetearPreguntas = () => {
  contenedorCabecera.classList.remove("hidden");
  preguntaActual = 0;
  puntuacion = 0;
  puntuacionFinal.textContent = `Puntuación: ${puntuacion}`;
  contenedorPreguntas.classList.remove("hidden");
  botonReset.classList.remove("show");
  renderApp();
};

botonReset.addEventListener("click", resetearPreguntas);

renderApp();
