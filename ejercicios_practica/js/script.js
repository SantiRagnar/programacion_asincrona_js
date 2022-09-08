"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
		--> Leer el README para ver el enunciado
*/
let acc = ''

function mostrarPersonaje(personaje) {
	//console.log(personaje)
	acc += `
    <div class='cont-personaje'>
      <div class="cont-img">
        <img src="${personaje.image}"/>
      </div>
      <div class="cont-info">
        <h5 class="name">${personaje.name}</h5>
        <p class="gender">genero: ${personaje.gender}</p>
        <p class="species">especie: ${personaje.species}</p>
        <p class="status">status:${personaje.status}</p>
        </div>
     </div>
    `
	}
	
	let personaje = document.getElementById('personaje')
	let button = document.getElementById('btnConsultar')
	let arrPersonajes = []
	let resultados = document.getElementById('resultados')
	button.addEventListener('click', (e) => {
		fetch(`https://rickandmortyapi.com/api/character/?name=${personaje.value}`)
		.then(res => res.json())
		.then(data => {
			//console.log(data.results)
			arrPersonajes = [...data.results];
			arrPersonajes.map((personaje)=>{
				mostrarPersonaje(personaje)
			})
			resultados.innerHTML = acc;
		})
		.catch(err => { console.log(err) })
	})
	

