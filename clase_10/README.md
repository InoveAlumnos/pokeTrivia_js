# PokeTrivia

## Release notes
Cambios y mejoras incorporadas en este release:
- Agregar el archivo "api.js" en donde se coloca toda la lógica respecto a la API de pokemon y la información que se muestra del mismo.
- Cuando se adivine correctamente el pokemon se debe llamar a la función "buscarPokemon" pasando el número de pokemon adivinado (recuerde sumar +1 al "numero" de pokemon). Esta función la debe crear dentro de api.js.
- La función buscarPokemon debe realizar el fetch de `https://pokeapi.co/api/v2/pokemon/${numero}`. Los datos que debe capturar son:
- * El nombre
- * El nº de pokemon
- * El tipo/s de pokemon
- * Los atributos (HP, ATK, etc) y la cantidad de cada uno.
- Variables creadas para modificar la tarjeta de información de pokemon:
- * const pokeCard = document.querySelector('#data-poke-card');
- * const pokeName = document.querySelector('#data-poke-name');
- * const pokeId = document.querySelector('#data-poke-id');
- * const pokeTypes = document.querySelector('#data-poke-types');
- * const pokeStats = document.querySelector('#data-poke-stats');
- Deberá agregar un "div" a "pokeTypes" por cada tipo del pokemon.
- Deberá agregar un "div" a "pokeStats" por cada atributo del pokemon. Cada atributo debe estar compuesto por dos "divs" para el nombre del atributo (name) y su valor (amount).


![pokeTrivia_profundizacion](pokeTrivia_profundizacion.gif)