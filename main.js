import "./style.css";
import { questions } from "./src/data/questions.js";
import { mostrarPreguntas } from "./src/mostrar-preguntas.js";
import { mostrarRespuestas } from "./src/mostrar-respuestas.js";

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
  const obtenerBotones = contenedorRespuestas.querySelectorAll("button");

  obtenerBotones.forEach((boton, index) => {
    boton.addEventListener("click", () => checkRespuesta(index));
  });
};

const checkRespuesta = (selectedIndex) => {
  const respuestaCorrecta = selectedIndex === questions[preguntaActual].correct;
  const seleccionarBoton = contenedorRespuestas.querySelector(
    `button:nth-child(${selectedIndex + 1})`
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
    if (preguntaActual < questions.length) {
      renderApp();
    } else {
      mostrarResultados();
    }
    puntuacionFinal.textContent = `Puntuación: ${puntuacion}`;
  }, TIME_OUT);
};

const mostrarResultados = () => {
  contenedorCabecera.style.display = "none";
  contenedorPreguntas.style.display = "none";
  contenedorRespuestas.innerHTML = `
      <p>
          Preguntas completadas! <br>
          Puntuación: ${puntuacion} de ${questions.length}
        </p>
        `;
  botonReset.style.display = "block";
};

const resetearPreguntas = () => {
  contenedorCabecera.style.display = "block";
  preguntaActual = 0;
  puntuacion = 0;
  puntuacionFinal.textContent = `Puntuación: ${puntuacion}`;
  contenedorPreguntas.style.display = "block";
  botonReset.style.display = "none";
  renderApp();
};

botonReset.addEventListener("click", resetearPreguntas);

renderApp();
