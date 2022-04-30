
const pokeCard = document.querySelector('#data-poke-card');
const pokeName = document.querySelector('#data-poke-name');
const pokeId = document.querySelector('#data-poke-id');
const pokeTypes = document.querySelector('#data-poke-types');
const pokeStats = document.querySelector('#data-poke-stats');

function buscarPokemon(numero){
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const { stats, types } = data;
    document.getElementById('skills-description').style.display = "block"

    pokeName.textContent = data.name;
    pokeId.textContent = `Nº ${data.id}`;
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}


const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';  // Borrar todos los divs dentro
    types.forEach(type => {
        // Por cada type crear un div cuyo contenido sea el tipo de pokemon
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';  // Borrar todos los divs dentro
    stats.forEach(stat => {
        // Por cada type crear un div cuyo contenido
        // sea el nombre del atributo (name) y su cantidad (amount)
        const statElement = document.createElement("div");

        const statElementName = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        
        const statElementAmount = document.createElement("div");
        statElementAmount.textContent = stat.base_stat;       
        
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeTypes.innerHTML = ''; // Borrar todos los divs dentro
    pokeStats.innerHTML = ''; // Borrar todos los divs dentro
    pokeId.textContent = '';
}