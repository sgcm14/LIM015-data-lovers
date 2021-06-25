// estas funciones son de ejemplo

// export const datos = (num) =>{      
//   //console.log(pokemon[2]);

//   //return pokemon.name;    

// }; 

// export const anotherExample = () => {
//   return 'OMG';
// };



export const filterData = (data, condition) => {

  let opciones='';
  
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {             
      if (data[i].type[j] == condition) {    
        opciones += '<div class = "cards"';
        opciones += `<p> ${data[i].name}<p>`;
        opciones += `<p>${data[i].stats['max-hp']} HP<p>`;        
        opciones += `<img src = ${data[i].img} />`;
        opciones += `<p> ${data[i].type}<p>`;
        opciones += `<p>height: ${data[i].size['weight']}<p>`;
        opciones += `<p>weight: ${data[i].size['height']}<p>`;
        opciones += '</div>';   
      }      
    }
  }  
  return opciones;  
};




export const validarNombre = (nombre) => {
   
  if(nombre.length === 0 || isNaN(nombre) == false) {
    //alert('Por favor ingresa tu nombre o nombre incorrecto');
    throw new TypeError('Por favor ingresa tu nombre correctamente');
    //document.getElementById('txtNombre').focus();
  }//else{
  //   bienvenida(nombre); 
  
  // }
  
  return `Bienvenid@ ${nombre}`;  //sirve para hacer el Test

};

// export const bienvenida =(nombre) => { 
//   const mensaje = `¡Bienvenida ${nombre}!`;
//   document.getElementById('msjBienvenida').innerText = mensaje;  
// };





