/* 
 * Validar el nombre: si es correcto devuelve el nombre de usuario
 */
export const validateName = (name) => {
  if(name.length === 0 || isNaN(name) == false) {
    throw new TypeError('Por favor ingresa tu nombre correctamente'); // lanzar una excepción
    //document.getElementById('txtNombre').focus();
  }
  return `¡ Bienvenid@ Maestr@ Pokemon ${name} !`; // Mensaje de Bienvenida
};

/* 
 * Buscar Pokemon por nombre
 */ 
export const searchPokemon = (data, namePokemon) => {
  const arrayPoke = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == namePokemon) {
      arrayPoke.push(data[i]); 
    }   
  }
  return arrayPoke; 
};

/* 
 * Fitrar Datos por Tipo
 */ 
export const filterData = (data, condition) => {
  const arrayFilter=[];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {           
      if (data[i].type[j] == condition) {    
        arrayFilter.push(data[i]);
      }      
    }
  }  
  return arrayFilter;  
};

/* 
 * Ordenar Datos por Nombre
 */
export const sortData = (data, sortBy, sortOrder) => {
  let datosOrdenado=[];
  if(sortBy == 'name'){
    if(sortOrder == 'ascendente'){
      datosOrdenado = data.sort(function(prev, next){
        if(prev.name > next.name){
          return 1;
        }else if(prev.name < next.name){
          return -1;
        }
        return 0;
      });
    } else  if(sortOrder == 'descendente'){
      datosOrdenado = data.sort(function(prev, next){
        if(prev.name > next.name){
          return -1;
        }else if(prev.name < next.name){
          return 1;
        }
        return 0;
      });
    }  
  }
  return datosOrdenado;
};

/* 
 * Calcular Pokemon mas fuerte
 */
export const computeStats = (data, nameFirst, nameSecond) => {
  let suma1 ='';
  let suma2 ='';
  const poke1=[];
  const poke2 =[];
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == nameFirst) {
      suma1 = parseInt(data[i].stats['base-attack']) + parseInt(data[i].stats['base-defense']) +
        parseInt(data[i].stats['base-stamina']) + parseInt(data[i].stats['max-cp']) +
        parseInt(data[i].stats['max-hp']);  //suma sus stats
      poke1.push(data[i]);  // Guarda la todo la data del pokemon1
    }
    if (data[i].name == nameSecond) {
      suma2 = parseInt(data[i].stats['base-attack']) + parseInt(data[i].stats['base-defense']) +
          parseInt(data[i].stats['base-stamina']) + parseInt(data[i].stats['max-cp']) +
          parseInt(data[i].stats['max-hp']);  //suma sus stats          
      poke2.push(data[i]);  // Guarda la todo la data del pokemon2
    }  
  }
  if (suma1>suma2){ 
    return poke1; // Si la suma de stats del (pokemon1 > pokemon2) -> mas poderoso (pokemon1)
  }else {
    return poke2; // Si la suma de stats del (pokemon2 > pokemon1) -> mas poderoso (pokemon2)
  }
};
