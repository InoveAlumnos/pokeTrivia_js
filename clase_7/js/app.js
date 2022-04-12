"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados = 0;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados = 0;  // Se utiliza para saber cuantos pokemons se intentaron adivinar

function restart() {
    const img = document.querySelector('#imgpokemon')
    document.getElementById('resultText').textContent = "";
    img.classList.remove("success");

    numero = Math.floor(Math.random() * pokemons.length);  
    img.setAttribute('src', pokemons[numero].thumbnail);
}

agregarEventos();
restart();
