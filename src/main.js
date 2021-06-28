import { searchPokemon, filterData, loadPokemon, validateName } from './data.js';
import data from './data/pokemon/pokemon.js';

/* 
 *Esto hace que el cursor siempre esté en el input
 */ 
document.getElementById('txtNombre').focus();

/* 
 * Botón Ingresar: Se ingresa un nombre de usuario
 */ 
const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener('click', () => {  //function ingresarNombre()

  const txtNombre = document.getElementById('txtNombre').value;
  document.getElementById('msjBienvenida').innerText = validateName(txtNombre);
  console.log(txtNombre);  //borrar
  document.getElementById('inicio').className = 'oculto';
  document.getElementById('principal').className = 'desoculto';

});

const btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'oculto';

  document.getElementById('slcTipos').className = 'desoculto';

});

const btnOrdenar = document.getElementById('btnOrdenar');
btnOrdenar.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'desoculto';

  document.getElementById('slcTipos').className = 'oculto';

});

const btnPokemones = document.getElementById('btnPokemones');
btnPokemones.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'desoculto';
  document.getElementById('btnBuscar').className = 'desoculto';
  document.getElementById('slcOrden').className = 'oculto';

  document.getElementById('slcTipos').className = 'oculto';

});

/* 
 * Cargar Pokemones
 */ 
const datos = data.pokemon;
document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);

/* 
 * Botón Cargar Pokemones
 */ 
//const btnPokemones = document.getElementById('btnPokemones');
btnPokemones.addEventListener('click', () => { //function Cargar Pokemones()
  
  document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);
});




/* 
 * Botón Buscar: Se ingresa el nombre de un pokemón
 */ 
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => { //function ingresarPokemon()

  //const datos = data.pokemon;
  const nombrePokemon = document.getElementById('txtBuscar').value;
  document.getElementById('container-pokemon').innerHTML = searchPokemon(datos, nombrePokemon);
  document.getElementById('txtBuscar').value='';
});

/*
 * Select Filtar: Filtrar pokemones 
*/
const slcTipos = document.getElementById('slcTipos');
slcTipos.addEventListener('change',  () => {

  const tipo=document.getElementById('slcTipos').value;
  let condicion = '';
  switch (tipo) {
  case 'grass':
    condicion = 'grass';
    break;
  case 'poison':
    condicion = 'poison';
    break;
  case 'fire':
    condicion = 'fire';
    break;
  case 'flying':
    condicion = 'flying';
    break;
  case 'bug':
    condicion = 'bug';
    break;
  case 'normal':
    condicion = 'normal';
    break;
  case 'ground':
    condicion = 'ground';
    break;
  case 'fighting':
    condicion = 'fighting';
    break;
  case 'electric':
    condicion = 'electric';
    break;
  case 'water':
    condicion = 'water';
    break;
  case 'psychic':
    condicion = 'psychic';
    break;
  case 'rock':
    condicion = 'rock';
    break;  
  case 'ice':
    condicion = 'ice';
    break;
  case 'ghost':
    condicion = 'ghost';
    break;
  case 'dragon':
    condicion = 'dragon';
    break;
  case 'fairy':
    condicion = 'fairy';
    break;
  case 'dark':
    condicion = 'dark';
    break;
  case 'steel':
    condicion = 'steel';
    break;
  default:
    console.log('no eligio nada');
    break;
  }
  document.getElementById('container-pokemon').innerHTML = filterData(datos, condicion);
});

const slcOrden = document.getElementById('slcOrden');
slcOrden.addEventListener('change',  () => {

  //const name = name;
  const tipo=document.getElementById('slcOrden').value;
  let condicion = '';
  switch (tipo) {
  case 'ascendente':
    condicion = 'ascendente';
    break;
  case 'descendente':
    condicion = 'descendente';
    break;
  default:
    console.log('no eligio nada');
    break;   
  
  }
  
  if(condicion == 'ascendente'){
    const datosOrdenado = datos.sort(function(prev, next){
      if(prev.name > next.name){
        return 1;
      }
      if(prev.name < next.name){
        return -1;
      }
      return 0;
    }); console.log(datosOrdenado);

    let print='';
    for (let i = 0; i < datosOrdenado.length; i++) {
      print += '<div class ="card">';
      print += `<p> ${datosOrdenado[i].num}</p>`;
      print += `<h2> ${datosOrdenado[i].name}</h2>`;
      print += `<p>${datosOrdenado[i].stats['max-hp']} HP</p>`;        
      print += `<img src = ${datosOrdenado[i].img} />`;
      print += `<p> ${datosOrdenado[i].type}</p>`;
      print += `<p>height: ${datosOrdenado[i].size['height']}</p>`;
      print += `<p>weight: ${datosOrdenado[i].size['weight']}</p>`;
      print += '</div>';  
    }
    //return print;  
    document.getElementById('container-pokemon').innerHTML = print;

  } else  if(condicion == 'descendente'){
    const datosOrdenado = datos.sort(function(prev, next){
      if(prev.name > next.name){
        return -1;
      }
      if(prev.name < next.name){
        return 1;
      }
      return 0;
    }); console.log(datosOrdenado);

    let print='';
    for (let i = 0; i < datosOrdenado.length; i++) {
      print += '<div class ="card">';
      print += `<p> ${datosOrdenado[i].num}</p>`;
      print += `<h2> ${datosOrdenado[i].name}</h2>`;
      print += `<p>${datosOrdenado[i].stats['max-hp']} HP</p>`;        
      print += `<img src = ${datosOrdenado[i].img} />`;
      print += `<p> ${datosOrdenado[i].type}</p>`;
      print += `<p>height: ${datosOrdenado[i].size['height']}</p>`;
      print += `<p>weight: ${datosOrdenado[i].size['weight']}</p>`;
      print += '</div>';  
    }
    //return print;  
    document.getElementById('container-pokemon').innerHTML = print;
  }
 
  //console.log(datosOrdenado);
  

  
  

  //document.getElementById('container-pokemon').innerHTML = sortData(datos, name,condicion);
});

/* 
 * Botón Ordenar: Ordenar pokemones
 */ 
// const btnOrdenarA = document.getElementById('btnOrdenarA');
// btnOrdenarA.addEventListener('click', () => { //function OrdenarPokemon()    

//   const datosOrdenado = datos.sort(function(prev, next){
//     if(prev.name > next.name){
//       return 1;
//     }
//     if(prev.name < next.name){
//       return -1;
//     }
//     return 0;
//   });

//   console.log(datosOrdenado);

//   let print='';
//   for (let i = 0; i < datosOrdenado.length; i++) {
//     print += '<div class ="card">';
//     print += `<p> ${datosOrdenado[i].num}</p>`;
//     print += `<h2> ${datosOrdenado[i].name}</h2>`;
//     print += `<p>${datosOrdenado[i].stats['max-hp']} HP</p>`;        
//     print += `<img src = ${datosOrdenado[i].img} />`;
//     print += `<p> ${datosOrdenado[i].type}</p>`;
//     print += `<p>height: ${datosOrdenado[i].size['height']}</p>`;
//     print += `<p>weight: ${datosOrdenado[i].size['weight']}</p>`;
//     print += '</div>';  
//   }
//   //return print;  
//   document.getElementById('container-pokemon').innerHTML = print;
  

   
  
// });







/* 
 * Botón Filtar: Filtrar pokemones
 
const btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click', () => { //function filtrarPokemon()

  //const datos = data.pokemon;
  const condicion = 'grass';
  document.getElementById('container-pokemon').innerHTML = filterData(datos, condicion); 

}); */

/* 
 * Carga Pokemones
let opciones='';

for (let i = 0; i < data.pokemon.length; i++) {
  opciones += '<div class = "card"';
  opciones += `<p> ${data.pokemon[i].num}<p>`;
  opciones += `<p> ${data.pokemon[i].name}<p>`;
  opciones += `<p>${data.pokemon[i].stats['max-hp']} HP<p>`;
  opciones += `<img src = ${data.pokemon[i].img} />`;
  opciones += `<p> ${data.pokemon[i].type}<p>`;
  opciones += `<p>height: ${data.pokemon[i].size['weight']}<p>`;
  opciones += `<p>weight: ${data.pokemon[i].size['height']}<p>`;
  opciones += '</div>';
}
document.getElementById('container-pokemon').innerHTML = opciones;  */ 

/* 
 * Botón Buscar: Se ingresa el nombre de un pokemón

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => { //function ingresarPokemon()

  const nombrePokemon = document.getElementById('txtBuscar').value;
  let opciones='';
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].name == nombrePokemon) {
      opciones += '<div class = "card"';
      opciones += `<p> ${data.pokemon[i].name}<p>`;
      opciones += `<img src = ${data.pokemon[i].img} />`;
      opciones += '</div>';
    }   
  }
  document.getElementById('container-pokemon').innerHTML = opciones;  

});  */ 

/* const menuTipo = document.getElementById('menuTipo');
menuTipo.addEventListener('click', function filtrarPokemon()
{     
      
  let opciones='';
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].type == 'grass') {
      opciones += '<div class = "card"';
      opciones += `<p> ${data.pokemon[i].name}<p>`;
      opciones += `<p> ${data.pokemon[i].type}<p>`;
      opciones += `<img src = ${data.pokemon[i].img} />`;
      opciones += '</div>';
      document.getElementById('container-pokemon').innerHTML = opciones;
    }    
  }
  
}); */