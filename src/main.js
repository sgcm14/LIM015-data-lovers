import { searchPokemon, filterData, validateName, sortData, computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';

/* 
 * Esto hace que el cursor siempre esté en el input
 */ 
document.querySelector('#txtNombre').focus();

/* 
 * Botón Ingresar: Se ingresa un nombre de usuario
 */ 
const btnIngresar = document.querySelector('#btnIngresar');
btnIngresar.addEventListener('click', () => {  //function ingresarNombre()
  const txtNombre = document.querySelector('#txtNombre').value;
  document.querySelector('#msjBienvenida').innerText = validateName(txtNombre);  
  document.querySelector('#inicio').className = 'oculto';
  document.querySelector('#principal').className = 'desoculto';
});

/* 
 * variable global(Manejo de la data)
 */
const datos = data.pokemon; 


/* 
 * Template Carga Pokemon
 */
const loadPokemon = (listaPoke) => {
  const container = document.querySelector('#container-pokemon');
  container.innerHTML = ''; // para que limpie el container
  //let templateList = '';
  listaPoke.forEach((datos) => {
    const card = document.createElement('div');
    card.className ='card';
    const print = `
      <p># ${datos.num}</p>
      <h2> ${datos.name}</h2>
      <p>${datos.stats['max-hp']} HP</p>        
      <img src = ${datos.img} />
      <p> ${datos.type}</p>
      <p>height: ${datos.size['height']}</p>
      <p>weight: ${datos.size['weight']}</p>`;
    //templateList += print;   
    card.innerHTML=print;   
    container.appendChild(card);
    //templateList = '';
  });
  //document.querySelector('#container-pokemon').innerHTML = templateList;
};  

/*  
 *  Template selects
 */
const loadSelect = (listaPoke) => {
  let templateList ='';
  listaPoke.forEach((datos) => {   
    const print = `<option value="${datos.name}">${datos.name}</option>`;
    templateList += print;    
  });
  document.querySelector('#slcPoke1').innerHTML = templateList;
  document.querySelector('#slcPoke2').innerHTML = templateList;
};

/* 
 * llama a loadSelect y le pasa la data a imprimir para selects
 */
loadSelect(datos);

/* 
 * llama a loadPokemon y le pasa la data a imprimir 
 */
loadPokemon(datos);

/* 
 * Botón Filtar: Menu
 */
const btnFiltrar = document.querySelector('#btnFiltrar');
btnFiltrar.addEventListener('click', () => {   
  document.querySelector('#txtBuscar').className = 'oculto';
  document.querySelector('#btnBuscar').className = 'oculto';
  document.querySelector('#slcOrden').className = 'oculto';
  document.querySelector('#slcTipos').className = 'desoculto';
  document.querySelector('#btnCalcular').className = 'oculto';
  document.querySelector('#tituloCalcular').className = 'oculto';
  document.querySelector('#slcPoke1').className = 'oculto';
  document.querySelector('#slcPoke2').className = 'oculto';
  loadPokemon(datos);
});

/* 
 * Botón Ordenar: Menu
 */
const btnOrdenar = document.querySelector('#btnOrdenar');
btnOrdenar.addEventListener('click', () => {    
  document.querySelector('#txtBuscar').className = 'oculto';
  document.querySelector('#btnBuscar').className = 'oculto';
  document.querySelector('#slcOrden').className = 'desoculto';
  document.querySelector('#slcTipos').className = 'oculto';
  document.querySelector('#btnCalcular').className = 'oculto';
  document.querySelector('#tituloCalcular').className = 'oculto';
  document.querySelector('#slcPoke1').className = 'oculto';
  document.querySelector('#slcPoke2').className = 'oculto';
  loadPokemon(datos);
});

/* 
 * Botón Inicio:  Menu
 */
const btnPokemones = document.querySelector('#btnPokemones');
btnPokemones.addEventListener('click', () => {    
  document.querySelector('#txtBuscar').className = 'desoculto';
  document.querySelector('#btnBuscar').className = 'desoculto';
  document.querySelector('#slcOrden').className = 'oculto';
  document.querySelector('#slcTipos').className = 'oculto';
  document.querySelector('#btnCalcular').className = 'oculto';
  document.querySelector('#tituloCalcular').className = 'oculto';
  document.querySelector('#slcPoke1').className = 'oculto';
  document.querySelector('#slcPoke2').className = 'oculto';
  loadPokemon(datos);
});

/* 
 * Botón Estadistica:  Menu
 */
const btnEstadistica = document.querySelector('#btnEstadistica');
btnEstadistica.addEventListener('click', () => {  
  
  document.querySelector('#txtBuscar').className = 'oculto';
  document.querySelector('#btnBuscar').className = 'oculto';
  document.querySelector('#slcOrden').className = 'oculto';
  document.querySelector('#slcTipos').className = 'oculto';
  document.querySelector('#btnCalcular').className = 'desoculto';
  document.querySelector('#tituloCalcular').className = 'desoculto';
  document.querySelector('#slcPoke1').className = 'desoculto';
  document.querySelector('#slcPoke2').className = 'desoculto';
  loadPokemon(datos);
});

/* 
 * Botón Buscar: Se ingresa el nombre de un pokemón
 */ 
const btnBuscar = document.querySelector('#btnBuscar');
btnBuscar.addEventListener('click', () => { 
  const nombrePokemon = document.querySelector('#txtBuscar').value;    
  loadPokemon(searchPokemon(datos, nombrePokemon));
});

/*
 * Select Filtar: Filtrar pokemones 
 */
const slcTipos = document.querySelector('#slcTipos');
slcTipos.addEventListener('change',  () => {
  // condicion trae en el value el nombre del tipo:fire,water,etc
  const condicion=document.querySelector('#slcTipos').value;
  loadPokemon(filterData(datos, condicion));  
});

/*
 * Select Ordenar: Ordenar pokemones 
 */
const slcOrden = document.querySelector('#slcOrden');
slcOrden.addEventListener('change',  () => {
  // Ordene por nombre
  const name = 'name';
  // condicion trae en el value el nombre del tipo:ascendente, descendente
  const condicion=document.querySelector('#slcOrden').value;   
  loadPokemon(sortData(datos,name, condicion));
});

/*
 * Select Filtar: Filtrar pokemones 
 */
const btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', () => {   
  const txtPoke1 = document.querySelector('#slcPoke1').value;
  const txtPoke2 = document.querySelector('#slcPoke2').value; 
  loadPokemon(computeStats(datos,txtPoke1, txtPoke2));   
});


/* 
 * Template carga Pokemon

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
  document.querySelector('#container-pokemon').innerHTML = templateList;
}; */ 

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