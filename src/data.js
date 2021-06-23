// estas funciones son de ejemplo

// export const datos = (num) =>{      
//   //console.log(pokemon[2]);

//   //return pokemon.name;    

// };

//   const data = {
//     buscar: function(numero){
//      return pokemon.name;

//   }
// };
    

// export const anotherExample = () => {
//   return 'OMG';
// };

export const validarNombre = (nombre) => {
   
  if(nombre.length === 0 || isNaN(nombre) == false) {
    //alert('Por favor ingresa tu nombre o nombre incorrecto');
    throw new TypeError('Por favor ingresa tu nombre correctamente');
    //document.getElementById('txtNombre').focus();
  }else{
    bienvenida(nombre); 
  
  }
  // console.log("impriendo desde data");
  // console.log(nombre);
  return nombre;  //sirve para hacer el Test

};

export const bienvenida =(nombre) => { 
  const mensaje = `¡Bienvenida ${nombre}!`;
  document.getElementById('msjBienvenida').innerHTML = mensaje;  
};



