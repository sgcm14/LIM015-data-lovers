// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const validarNombre = (nombre) => {
   
  if(nombre.length === 0 || isNaN(nombre) == false) {
    //alert('Por favor ingresa tu nombre o nombre incorrecto');
    throw new TypeError('Por favor ingresa tu nombre o nombre incorrecto');

    //document.getElementById('txtNombre').focus();
 } 
  // console.log("impriendo desde data");
  // console.log(nombre);
  return nombre;
};
