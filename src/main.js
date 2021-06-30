import { searchPokemon, filterData, loadPokemon, validateName, sortData, computeStats } from './data.js';
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

/* 
 * Cargar Pokemones
 */ 
const datos = data.pokemon;
document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);


const btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'oculto';
  document.getElementById('slcTipos').className = 'desoculto';
  document.getElementById('txtPoke1').className = 'oculto';
  document.getElementById('txtPoke2').className = 'oculto';
  document.getElementById('btnCalcular').className = 'oculto';
  document.getElementById('tituloCalcular').className = 'oculto';
  document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);

});

const btnOrdenar = document.getElementById('btnOrdenar');
btnOrdenar.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'desoculto';
  document.getElementById('slcTipos').className = 'oculto';
  document.getElementById('txtPoke1').className = 'oculto';
  document.getElementById('txtPoke2').className = 'oculto';
  document.getElementById('btnCalcular').className = 'oculto';
  document.getElementById('tituloCalcular').className = 'oculto';
  document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);

});

const btnPokemones = document.getElementById('btnPokemones');
btnPokemones.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'desoculto';
  document.getElementById('btnBuscar').className = 'desoculto';
  document.getElementById('slcOrden').className = 'oculto';
  document.getElementById('slcTipos').className = 'oculto';
  document.getElementById('txtPoke1').className = 'oculto';
  document.getElementById('txtPoke2').className = 'oculto';
  document.getElementById('btnCalcular').className = 'oculto';
  document.getElementById('tituloCalcular').className = 'oculto';
  document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);

});

const btnEstadistica = document.getElementById('btnEstadistica');
btnEstadistica.addEventListener('click', () => {  //function ingresarNombre()
  
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'oculto';
  document.getElementById('slcTipos').className = 'oculto';
  document.getElementById('txtPoke1').className = 'desoculto';
  document.getElementById('txtPoke2').className = 'desoculto';
  document.getElementById('btnCalcular').className = 'desoculto';
  document.getElementById('tituloCalcular').className = 'desoculto';
  document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);

});



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
  //document.getElementById('txtBuscar').value='';
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

  const name = 'name';

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
    condicion = 'Elige opcion';
    break;   
  }  
  document.getElementById('container-pokemon').innerHTML = sortData(datos,name, condicion); 
   
});



const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', () => { 

  //const datos = data.pokemon;
  const txtPoke1 = document.getElementById('txtPoke1').value;
  const txtPoke2 = document.getElementById('txtPoke2').value;
  
  document.getElementById('container-pokemon').innerHTML = computeStats(datos,txtPoke1, txtPoke2);
  
});


// const btnCalcular = document.getElementById('btnCalcular');
// btnCalcular.addEventListener('click', () => { 

//   //const datos = data.pokemon;
//   const txtPoke1 = document.getElementById('txtPoke1').value;
//   const txtPoke2 = document.getElementById('txtPoke2').value;
//   let suma1 ='';
//   let suma2 ='';
//   let print1='';
//   let print2 ='';
//   for (let i = 0; i < data.pokemon.length; i++) {
//     if (data.pokemon[i].name == txtPoke1) {
//       suma1 = parseInt(data.pokemon[i].stats['base-attack']) + parseInt(data.pokemon[i].stats['base-defense']) +
//         parseInt(data.pokemon[i].stats['base-stamina']) + parseInt(data.pokemon[i].stats['max-cp']) +
//         parseInt(data.pokemon[i].stats['max-hp']);  
        
//       print1 += '<div class ="card">'; 
//       print1 += `<p> ${data.pokemon[i].num}</p>`;   
//       print1 += `<h2> ${data.pokemon[i].name}</h2>`;    
//       print1 += `<p>${data.pokemon[i].stats['max-hp']} HP</p>`;        
//       print1 += `<img src = ${data.pokemon[i].img} />`;
//       print1 += `<p> ${data.pokemon[i].type}</p>`;
//       print1 += `<p>height: ${data.pokemon[i].size['height']}</p>`;   
//       print1 += `<p>weight: ${data.pokemon[i].size['weight']}</p>`;    
//       print1 += '</div>';  

//     }  

//     if (data.pokemon[i].name == txtPoke2) {
//       suma2 = parseInt(data.pokemon[i].stats['base-attack']) + parseInt(data.pokemon[i].stats['base-defense']) +
//           parseInt(data.pokemon[i].stats['base-stamina']) + parseInt(data.pokemon[i].stats['max-cp']) +
//           parseInt(data.pokemon[i].stats['max-hp']);
          
//       print2 += '<div class ="card">'; 
//       print2 += `<p> ${data.pokemon[i].num}</p>`;   
//       print2 += `<h2> ${data.pokemon[i].name}</h2>`;    
//       print2 += `<p>${data.pokemon[i].stats['max-hp']} HP</p>`;        
//       print2 += `<img src = ${data.pokemon[i].img} />`;
//       print2 += `<p> ${data.pokemon[i].type}</p>`;
//       print2 += `<p>height: ${data.pokemon[i].size['height']}</p>`;   
//       print2 += `<p>weight: ${data.pokemon[i].size['weight']}</p>`;    
//       print2 += '</div>';      
  
//     }  
//   }
//   console.log(suma1);
//   console.log(suma2);

//   if (suma1>suma2){
//     console.log('el mayor es ' + suma1);
//     document.getElementById('container-pokemon').innerHTML = print1;
//   }else {
//     console.log('el mayor es ' + suma2);  
//     document.getElementById('container-pokemon').innerHTML = print2;
//   }
  
// });


