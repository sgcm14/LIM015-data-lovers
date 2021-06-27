// estas funciones son de ejemplo

// export const anotherExample = () => {
//   return 'OMG';
// };

/* 
 * Validar el nombre: si es correcto devuelve el nombre de usuario
 */ 
export const validateName = (name) => {
  
  if(name.length === 0 || isNaN(name) == false) {
    throw new TypeError('Por favor ingresa tu nombre correctamente');
    //document.getElementById('txtNombre').focus();
  }
  return `¡ Bienvenid@ Maestr@ Pokemon ${name} !`;

};

/* 
 * Cargar Pokemones
 */ 
export const loadPokemon = (data) => {

  let print='';
  for (let i = 0; i < data.length; i++) {
    print += '<div class ="card">';
    print += `<p> ${data[i].num}</p>`;
    print += `<h2> ${data[i].name}</h2>`;
    print += `<p>${data[i].stats['max-hp']} HP</p>`;        
    print += `<img src = ${data[i].img} />`;
    print += `<p> ${data[i].type}</p>`;
    print += `<p>height: ${data[i].size['weight']}</p>`;
    print += `<p>weight: ${data[i].size['height']}</p>`;
    print += '</div>';  
  }
  return print;  

};

/* 
 * Buscar Pokemon por nombre
 */ 
export const searchPokemon = (data, namePokemon) => {
  
  let print='';
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == namePokemon) {
      print += '<div class ="card">';
      print += `<p> ${data[i].num}</p>`;
      print += `<h2> ${data[i].name}</h2>`;
      print += `<p>${data[i].stats['max-hp']} HP</p>`;        
      print += `<img src = ${data[i].img} />`;
      print += `<p> ${data[i].type}</p>`;
      print += `<p>height: ${data[i].size['weight']}</p>`;
      print += `<p>weight: ${data[i].size['height']}</p>`;
      print += '</div>';
    }   
  }
  return print;  

};

/* 
 * Fitrar Datos
 */ 
export const filterData = (data, condition) => {

  let print='';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {             
      if (data[i].type[j] == condition) {    
        print += '<div class ="card">';
        print += `<p> ${data[i].num}</p>`;
        print += `<h2> ${data[i].name}</h2>`;
        print += `<p>${data[i].stats['max-hp']} HP</p>`;        
        print += `<img src = ${data[i].img} />`;
        print += `<p> ${data[i].type}</p>`;
        print += `<p>height: ${data[i].size['weight']}</p>`;
        print += `<p>weight: ${data[i].size['height']}</p>`;
        print += '</div>';   
      }      
    }
  }  
  return print;  
  
};
