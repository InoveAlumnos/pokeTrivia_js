

const send = document.getElementById('send')
const reload = document.getElementById('reload')

function agregarEventos() {
    // evento de onclick sobre boton send
    send.onclick = () => {
        let answer = document.querySelector('input').value.trim();

        if(answer.length) {
            cantidadEncuestados += 1;

            if(answer.toLowerCase() == pokemons[numero].name.toLowerCase()) {
                // Si ingresé aquí es porque el pokemon fue adivinado
                document.getElementById('resultText').textContent = `¡Felicidades! Es ${pokemons[numero].name}`;
                document.getElementById('imgpokemon').classList.add("success");
                document.querySelector('input').value = "";
                cantidadAcertados += 1;
            }
            else {
                // Si ingresé aquí es porque el pokemon NO fue adivinado
                document.getElementById('resultText').textContent = `¡No! Es ${pokemons[numero].name}`;
                document.getElementById('imgpokemon').classList.remove("success");
                document.querySelector('input').value = "";
            }

            const puntaje = document.getElementById('puntaje');
            puntaje.textContent = `Puntaje ${cantidadAcertados} de ${cantidadEncuestados}`;
            puntaje.className = (2*cantidadAcertados) >= cantidadEncuestados? null : "puntajeBajo";
        }
        else {
            document.getElementById('resultText').textContent = "Coloque el nombre ";
        }
  }
  
  // evento de onclick sobre boton reload
  reload.onclick = restart;

}