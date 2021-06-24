import { validarNombre } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
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

  document.getElementById('inicio').className = 'oculto';
  document.getElementById('principal').className = 'desoculto';


});

const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', function ingresarPokemon()
{       
  const nombrePokemon = document.getElementById('txtBuscar').value;
  let opciones='';
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].name == nombrePokemon) {
      
      opciones += '<div class = "cards"';
      opciones += `<p> ${data.pokemon[i].name}<p>`;
      opciones += `<img src = ${data.pokemon[i].img} />`;
      opciones += '</div>';

      document.getElementById('container').innerHTML = opciones;
    }    
  }
  
});

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


// const btnFiltrar = document.getElementById('btnFiltrar');
// btnFiltrar.addEventListener('click', function filtrarPokemon()
// {         
//   let opciones='';
//   for (let i = 0; i < data.pokemon.length; i++) {
//     if (data.pokemon[i].type == 'grass') {
      
//       opciones += '<div class = "cards"';
//       opciones += `<p> ${data.pokemon[i].name}<p>`;
//       opciones += `<p> ${data.pokemon[i].type}<p>`;
//       opciones += `<img src = ${data.pokemon[i].img} />`;
//       opciones += '</div>';

//       document.getElementById('container').innerHTML = opciones;
//     }    
//   }
  
// });




const menuTipo = document.getElementById('menuTipo');
menuTipo.addEventListener('click', function filtrarPokemon()
{         
  let opciones='';
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].type == 'grass') {
      
      opciones += '<div class = "cards"';
      opciones += `<p> ${data.pokemon[i].name}<p>`;
      opciones += `<p> ${data.pokemon[i].type}<p>`;
      opciones += `<img src = ${data.pokemon[i].img} />`;
      opciones += '</div>';

      document.getElementById('container').innerHTML = opciones;
    }    
  }
  
});