import { searchPokemon, filterData, validateName, sortData, computeStats } from './data.js';
// import data from './data/pokemon/pokemon.js';  // ARCHIVO.JS

/**************************************************LOGIN***************************************************************/
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
  document.querySelector('#msjBienvenida').innerText = validateName(txtNombre);   // mostrar Bienvenida Usuario
  document.querySelector('#inicio').classList.add('oculto');
  document.querySelector('#principal').className = 'desoculto';  // mostrar esta pantalla
});

/**********************************************CONSUMIR DATA********************************************************/
/* 
 * Implementando el fetch
 */ 
let datos;
fetch('data/pokemon/pokemon.json')
  .then(response  => response .json())
  .then(data => {
    datos = data.pokemon;   // variable global(Manejo de la data)
    loadSelect(datos);    // llama a loadSelect y le pasa la data completa
    loadPokemon(datos);   // llama a loadPokemon y le pasa la data completa
  }).catch(error => console.log('hay error: '+ error));  // controla las excepciones

/* 
 * variable global(Manejo de la data) - ARCHIVO.JS
 */
//const datos = data.pokemon;

/*************************************************TEMPLATES**********************************************************/
/* 
 * Template Carga Pokemon (Cards)
 */
const loadPokemon = (listaPoke) => {  // Recibe un arreglo con los datos de un/unos pokemon
  const container = document.querySelector('#container-pokemon');
  container.innerHTML = ''; // para que limpie el container
  //let templateList = '';
  listaPoke.forEach((datos) => {
    const card = document.createElement('div');
    card.className ='card';
    const print = `
      <p class='propiedadNumPoke'># ${datos.num}</p>
      <p class='propiedadNumPoke'>${datos.stats['max-hp']} HP</p><p class='heartPoke'>♥</p>  
      <h2> ${datos.name}</h2>
      <img src = ${datos.img} />
      <p class='propiedadTipoPoke'> ${datos.type}</p>
      <p class='propiedadPoke'>height: ${datos.size['height']}</p>
      <p class='propiedadPoke'>weight: ${datos.size['weight']}</p>`;
    //templateList += print;   // Llenaba todas las cards
    card.innerHTML=print;   
    container.appendChild(card);  // Imprime card una X una
    //templateList = '';
  });
  //document.querySelector('#container-pokemon').innerHTML = templateList;  // Imprime todas las card juntas
};  

/*  
 *  Template selects  (Selects de Estadistica)
 */
const loadSelect = (listaPoke) => { // Recibe un arreglo con los datos de los pokemones
  let templateList ='';
  listaPoke.forEach((datos) => {   
    const print = `<option value="${datos.name}">${datos.name}</option>`;
    templateList += print;    // Llena los selects con todos los names
  });
  document.querySelector('#slcPoke1').innerHTML = templateList;   // Imprime todos los names juntos
  document.querySelector('#slcPoke2').innerHTML = templateList;   // Imprime todos los names juntos
};

/* 
 * llama a loadSelect y le pasa la data a imprimir para selects - ARCHIVO.JS
 */
//loadSelect(datos);

/* 
 * llama a loadPokemon y le pasa la data a imprimir - ARCHIVO.JS
 */
//loadPokemon(datos);


/**************************************************MENU***************************************************************/
/* 
 * Botón Filtar: Menu
 */
const btnFiltrar = document.querySelector('#btnFiltrar');
btnFiltrar.addEventListener('click', () => {
  document.querySelector('.elementos-container-inicio').classList.remove('desoculto');
  document.querySelector('.elementos-container-inicio').classList.add('oculto');
  document.querySelector('.elementos-container-ordenar').classList.remove('desoculto');
  document.querySelector('.elementos-container-ordenar').classList.add('oculto');
  document.querySelector('.elementos-container-filtrar').classList.remove('oculto');
  document.querySelector('.elementos-container-filtrar').classList.add('desoculto');   // mostrar este submenu
  document.querySelector('.elementos-container-calcular').classList.remove('desoculto');
  document.querySelector('.elementos-container-calcular').classList.add('oculto');

  loadPokemon(datos);  // Volver a mostrar a todos los pokemones
});

/* 
 * Botón Ordenar: Menu
 */
const btnOrdenar = document.querySelector('#btnOrdenar');
btnOrdenar.addEventListener('click', () => {
  document.querySelector('.elementos-container-inicio').classList.remove('desoculto');
  document.querySelector('.elementos-container-inicio').classList.add('oculto');
  document.querySelector('.elementos-container-ordenar').classList.remove('oculto');
  document.querySelector('.elementos-container-ordenar').classList.add('desoculto');   // mostrar este submenu
  document.querySelector('.elementos-container-filtrar').classList.remove('desoculto');
  document.querySelector('.elementos-container-filtrar').classList.add('oculto');
  document.querySelector('.elementos-container-calcular').classList.remove('desoculto');
  document.querySelector('.elementos-container-calcular').classList.add('oculto');

  loadPokemon(datos);   // Volver a mostrar a todos los pokemones
});

/* 
 * Botón Inicio:  Menu
 */
const btnPokemones = document.querySelector('#btnPokemones');
btnPokemones.addEventListener('click', () => {
  document.querySelector('.elementos-container-inicio').classList.remove('oculto');
  document.querySelector('.elementos-container-inicio').classList.add('desoculto');    // mostrar este submenu
  document.querySelector('.elementos-container-ordenar').classList.remove('desoculto');
  document.querySelector('.elementos-container-ordenar').classList.add('oculto');
  document.querySelector('.elementos-container-filtrar').classList.remove('desoculto');
  document.querySelector('.elementos-container-filtrar').classList.add('oculto');
  document.querySelector('.elementos-container-calcular').classList.remove('desoculto');
  document.querySelector('.elementos-container-calcular').classList.add('oculto');

  loadPokemon(datos);   // Volver a mostrar a todos los pokemones
});

/* 
 * Botón Estadistica:  Menu
 */
const btnEstadistica = document.querySelector('#btnEstadistica');
btnEstadistica.addEventListener('click', () => {  
  document.querySelector('.elementos-container-inicio').classList.remove('desoculto');
  document.querySelector('.elementos-container-inicio').classList.add('oculto');
  document.querySelector('.elementos-container-ordenar').classList.remove('desoculto');
  document.querySelector('.elementos-container-ordenar').classList.add('oculto');
  document.querySelector('.elementos-container-filtrar').classList.remove('desoculto');
  document.querySelector('.elementos-container-filtrar').classList.add('oculto');
  document.querySelector('.elementos-container-calcular').classList.remove('oculto');
  document.querySelector('.elementos-container-calcular').classList.add('desoculto'); // mostrar este submenu

  loadPokemon(datos);   // Volver a mostrar a todos los pokemones
});

/*************************************************SUB-MENU**********************************************************/
/* 
 * Botón Buscar: Se ingresa el nombre de un pokemón
 */ 
const btnBuscar = document.querySelector('#btnBuscar');
btnBuscar.addEventListener('click', () => { 
  const nombrePokemon = document.querySelector('#txtBuscar').value.toLowerCase();    
  loadPokemon(searchPokemon(datos, nombrePokemon));
});

/*
 * Select Filtrar: Filtrar pokemones 
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


/* **********************************************************************
 * Stats del Pokemon - Datos para Estadistica Grafica

const loadPokemonSelect = (Poke) => {
  const arrayPoke = [];
  Poke.forEach((datos) => {
    const ataque = parseInt(datos.stats['base-attack']);
    const defensa = parseInt(datos.stats['base-defense']);
    const stamina = parseInt(datos.stats['base-stamina']);
    const cp = parseInt(datos.stats['max-cp']);
    const hp = parseInt(datos.stats['max-hp']);
    arrayPoke.push(ataque,defensa,stamina,cp,hp);
  }); 
  return arrayPoke; 
}; */ 

/*
 * Manipula Grafica - Estadistica

function manupilarGrafico(txtPoke1,txtPoke2,dataPoke1,dataPoke2){
  const container = document.querySelector('#container-pokemon');
  const canvas ='<canvas id="grafica" width="400" height="300"></canvas>';  
  container.innerHTML += canvas;
  const grafica = document.querySelector('#grafica').getContext('2d'); // un contexto de renderizado de dos dimensiones
  Grafico(grafica,txtPoke1,txtPoke2,dataPoke1,dataPoke2);
} */
/*
 * Grafica - Estadistica
 
function Grafico(grafica,txtPoke1,txtPoke2,dataPoke1,dataPoke2){
  const chart = new Chart(grafica,{  
    type: 'bar',
    data:{
      labels: ['Base-Attack', 'Base-Defense', 'Base-Stamina', 'Max-CP', 'Max-HP'], // Eje x  
      datasets:[
        {
          label: txtPoke1.toUpperCase(),  // Leyenda (nombre Pokemon 1)
          data: dataPoke1, // Eje y    (stats Pokemon 1)       
          backgroundColor: 'rgb(66,134,244)',  // Color blue            
        },
        {
          label: txtPoke2.toUpperCase(),  // Leyenda  (nombre Pokemon 2)
          data: dataPoke2,  // Eje y  (stats Pokemon 2)
          backgroundColor: 'rgb(229,89,50)',  // Color orange       
        }       
      ]     
    },
  });
}*/

/**************************************************************************/

/*
 * Select pokemones: Estadisticas 
 */
const btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', () => {   
  const txtPoke1 = document.querySelector('#slcPoke1').value; // Nombre Pokemon 1
  const txtPoke2 = document.querySelector('#slcPoke2').value; // Nombre Pokemon 2
  loadPokemon(computeStats(datos,txtPoke1, txtPoke2)); // Card Pokemon mas poderoso
  //const dataPoke1 = loadPokemonSelect(searchPokemon(datos,txtPoke1)); // Stats Pokemon 1
  //const dataPoke2 = loadPokemonSelect(searchPokemon(datos,txtPoke2)); // Stats Pokemon 2
  //manupilarGrafico(txtPoke1,txtPoke2,dataPoke1,dataPoke2);  // Paso datos  
});


/*********************************************************************************************************************/
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