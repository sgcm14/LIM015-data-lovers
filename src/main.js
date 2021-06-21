import { validarNombre } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(validarNombre);


const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", function ingresarNombre()
{
    const txtNombre = document.getElementById("txtNombre").value;    
     console.log(txtNombre);
     
     document.getElementById("txtNombre").value = (validarNombre(txtNombre));


});
