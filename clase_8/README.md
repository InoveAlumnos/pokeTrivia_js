# PokeTrivia

## Release notes
Cambios y mejoras incorporadas en este release:
- Modificar los eventos, en vez de utilizar "addEventListener" utilizar la propiedad de "on-event" para asignar un evento al elemento HTML.
- Agregar el evento "onclick" para el boton "send".
- Analizar el resultado de la encuesta y en base a eso mostrar o no el pokemon y el mensaje de felicitaciones.
- Agregar un operador ternario para modificar el estilo de la leyenda "puntaje" en función si la persona respondió correctamente el 50% de las veces. En caso de que haya respondido bien menos de la mitad de las preguntas que se realizaron (cantidadEncuestados) agregar la clase "puntajeBajo".

![pokeTrivia_profundizacion](pokeTrivia_profundizacion.gif)
