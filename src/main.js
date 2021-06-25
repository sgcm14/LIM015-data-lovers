import { filterData, validarNombre } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
//import { datos } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

// import data from './data/rickandmorty/rickandmorty.js';


// Para el botor ingresar
const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener('click', () => {  //function ingresarNombre()
  const txtNombre = document.getElementById('txtNombre').value;    

     
  document.getElementById('msjBienvenida').innerHTML = validarNombre(txtNombre);

  console.log(txtNombre);  
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
  opciones += `<p>${data.pokemon[i].stats['max-hp']} HP<p>`;
  opciones += `<img src = ${data.pokemon[i].img} />`;
  opciones += `<p> ${data.pokemon[i].type}<p>`;
  opciones += `<p>height: ${data.pokemon[i].size['weight']}<p>`;
  opciones += `<p>weight: ${data.pokemon[i].size['height']}<p>`;

  opciones += '</div>';
    
}
console.log(data.pokemon.length);

document.getElementById('container').innerHTML = opciones;



const btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click', function filtrarPokemon()
{   
  const datos = data.pokemon;
  const condicion = 'grass';

  document.getElementById('container').innerHTML = filterData(datos, condicion);       
  
});


const btnOrdenar = document.getElementById('btnOrdenar');
btnOrdenar.addEventListener('click', function OrdenarPokemon()
{   
  const datos = data.pokemon;
  const campo = 'name';   

  const array = [];
  for (let i = 0; i < datos.length; i++) {

    if(campo == 'name'){
      array.push(datos[i].name);
    //console.log(datos[i].name);
    }      
    
  }
  console.log(array);
  console.log(array.sort());

  //document.getElementById('container').innerHTML = filterData(datos, campo);       
  
});


// const menuTipo = document.getElementById('menuTipo');
// menuTipo.addEventListener('click', function filtrarPokemon()
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



