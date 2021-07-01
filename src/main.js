import { searchPokemon, filterData, validateName, sortData, computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';

/* 
 * Esto hace que el cursor siempre esté en el input
 */ 
document.getElementById('txtNombre').focus();

/* 
 * Botón Ingresar: Se ingresa un nombre de usuario
 */ 
const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener('click', () => {  //function ingresarNombre()
  const txtNombre = document.getElementById('txtNombre').value;
  document.getElementById('msjBienvenida').innerText = validateName(txtNombre);  
  document.getElementById('inicio').className = 'oculto';
  document.getElementById('principal').className = 'desoculto';
});

/* 
 * variable global(Manejo de la data)
 */
const datos = data.pokemon; 

/* 
 * Template carga Pokemon
 */ 
const loadPokemon = (listaPoke) => {
  let templateList ='';
  listaPoke.forEach((datos) => {
   
    const print = `<div class ="card">
      <p># ${datos.num}</p>
      <h2> ${datos.name}</h2>
      <p>${datos.stats['max-hp']} HP</p>        
      <img src = ${datos.img} />
      <p> ${datos.type}</p>
      <p>height: ${datos.size['height']}</p>
      <p>weight: ${datos.size['weight']}</p>
      </div>`;
    templateList += print;    
  });
  document.getElementById('container-pokemon').innerHTML = templateList;
};

/* 
 * llama a loadPokemon y le pasa la data a imprimir 
 */
loadPokemon(datos);

/* 
 * Botón Filtar: Menu
 */
const btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click', () => {   
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'oculto';
  document.getElementById('slcTipos').className = 'desoculto';
  document.getElementById('txtPoke1').className = 'oculto';
  document.getElementById('txtPoke2').className = 'oculto';
  document.getElementById('btnCalcular').className = 'oculto';
  document.getElementById('tituloCalcular').className = 'oculto';
  loadPokemon(datos);
});

/* 
 * Botón Ordenar: Menu
 */
const btnOrdenar = document.getElementById('btnOrdenar');
btnOrdenar.addEventListener('click', () => {    
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'desoculto';
  document.getElementById('slcTipos').className = 'oculto';
  document.getElementById('txtPoke1').className = 'oculto';
  document.getElementById('txtPoke2').className = 'oculto';
  document.getElementById('btnCalcular').className = 'oculto';
  document.getElementById('tituloCalcular').className = 'oculto';
  loadPokemon(datos);
});

/* 
 * Botón Inicio:  Menu
 */
const btnPokemones = document.getElementById('btnPokemones');
btnPokemones.addEventListener('click', () => {    
  document.getElementById('txtBuscar').className = 'desoculto';
  document.getElementById('btnBuscar').className = 'desoculto';
  document.getElementById('slcOrden').className = 'oculto';
  document.getElementById('slcTipos').className = 'oculto';
  document.getElementById('txtPoke1').className = 'oculto';
  document.getElementById('txtPoke2').className = 'oculto';
  document.getElementById('btnCalcular').className = 'oculto';
  document.getElementById('tituloCalcular').className = 'oculto';
  loadPokemon(datos);
});

/* 
 * Botón Estadistica:  Menu
 */
const btnEstadistica = document.getElementById('btnEstadistica');
btnEstadistica.addEventListener('click', () => {  
  
  document.getElementById('txtBuscar').className = 'oculto';
  document.getElementById('btnBuscar').className = 'oculto';
  document.getElementById('slcOrden').className = 'oculto';
  document.getElementById('slcTipos').className = 'oculto';
  document.getElementById('txtPoke1').className = 'desoculto';
  document.getElementById('txtPoke2').className = 'desoculto';
  document.getElementById('btnCalcular').className = 'desoculto';
  document.getElementById('tituloCalcular').className = 'desoculto';
  loadPokemon(datos);
});

/* 
 * Botón Buscar: Se ingresa el nombre de un pokemón
 */ 
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => { 
  const nombrePokemon = document.getElementById('txtBuscar').value;    
  loadPokemon(searchPokemon(datos, nombrePokemon));
});

/*
 * Select Filtar: Filtrar pokemones 
 */
const slcTipos = document.getElementById('slcTipos');
slcTipos.addEventListener('change',  () => {
  // condicion trae en el value el nombre del tipo:fire,water,etc
  const condicion=document.getElementById('slcTipos').value;
  loadPokemon(filterData(datos, condicion));  
});

/*
 * Select Ordenar: Ordenar pokemones 
 */
const slcOrden = document.getElementById('slcOrden');
slcOrden.addEventListener('change',  () => {
  // Ordene por nombre
  const name = 'name';
  // condicion trae en el value el nombre del tipo:ascendente, descendente
  const condicion=document.getElementById('slcOrden').value;   
  loadPokemon(sortData(datos,name, condicion));
});

/*
 * Select Filtar: Filtrar pokemones 
 */
const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', () => {   
  const txtPoke1 = document.getElementById('txtPoke1').value;
  const txtPoke2 = document.getElementById('txtPoke2').value; 
  loadPokemon(computeStats(datos,txtPoke1, txtPoke2));   
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


/* 
 * Botón Cargar Pokemones
 
//const btnPokemones = document.getElementById('btnPokemones');
btnPokemones.addEventListener('click', () => { //function Cargar Pokemones()
  
  //document.getElementById('container-pokemon').innerHTML = loadPokemon(datos);
});*/ 