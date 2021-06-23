import { validarNombre } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
//import { datos } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

// import data from './data/rickandmorty/rickandmorty.js';

//console.log(validarNombre);

const btnIngresar = document.getElementById('btnIngresar');

btnIngresar.addEventListener('click', () => {  //function ingresarNombre()
  const txtNombre = document.getElementById('txtNombre').value;    
  console.log(txtNombre);     
  validarNombre(txtNombre);

});

// const btnBuscar = document.getElementById('btnBuscar');

// btnBuscar.addEventListener('click', function ingresarPokemon()
// {
       
//   const numero = document.getElementById('txtBuscar').value;
//   document.getElementById('pokemon').innerHTML = datos(numero);
// });

let opciones='';

for (let i = 0; i < data.pokemon.length; i++) {
  opciones += '<div class = "cards"';
  opciones += `<p> ${data.pokemon[i].name}<p>`;
  opciones += `<img src = ${data.pokemon[i].img} />`;
  opciones += '</div>';
    
}
console.log(data.pokemon.length);
// opciones += `<p> ${data.pokemon[0].num}<p>`;
// opciones += `<p> ${data.pokemon[0].name}<p>`;
// opciones += `<p> ${data.pokemon[0].about}<p>`;  
  
document.getElementById('container').innerHTML = opciones;


