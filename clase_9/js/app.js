"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar

// Leer los puntajes de la sessionStorage
let cantidadAcertados = parseInt(sessionStorage.cantidadAcertados? sessionStorage.cantidadAcertados : 0);
let cantidadEncuestados = parseInt(sessionStorage.cantidadEncuestados? sessionStorage.cantidadEncuestados : 0);

// Iniciar el marcador de puntaje
const puntaje = document.getElementById('puntaje');
puntaje.textContent = `Puntaje ${cantidadAcertados} de ${cantidadEncuestados}`;
puntaje.className = (2*cantidadAcertados) >= cantidadEncuestados? null : "puntajeBajo";

// Parsear el JSON string a una lista de objetos
const data = JSON.parse(jsonData);

// Crear la lista de objetos pokemon
let pokemons = [];
for(const pokeData of data) {
    pokemons.push(new Pokemon(pokeData.id, pokeData.name));
}

function restart() {
    const img = document.querySelector('#imgpokemon')
    document.getElementById('resultText').textContent = "";
    img.classList.remove("success");

    numero = Math.floor(Math.random() * pokemons.length);  
    img.setAttribute('src', pokemons[numero].thumbnail);
}

agregarEventos();
restart();
