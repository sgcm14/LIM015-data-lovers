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
    print += `<p>height: ${data[i].size['height']}</p>`;
    print += `<p>weight: ${data[i].size['weight']}</p>`;
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
      print += `<p>height: ${data[i].size['height']}</p>`;
      print += `<p>weight: ${data[i].size['weight']}</p>`;
      print += '</div>';
    }   
  }
  return print;  

};

/* 
 * Fitrar Datos Tipo
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
        print += `<p>height: ${data[i].size['height']}</p>`;
        print += `<p>weight: ${data[i].size['weight']}</p>`;
        print += '</div>';   
      }      
    }
  }  
  return print;  
  
};

export const sortData = (data, sortBy, sortOrder) => {
  //sortBy='name';
  if(sortBy == 'name'){
    if(sortOrder == 'ascendente'){
      const datosOrdenado = data.sort(function(prev, next){
        if(prev.name > next.name){
          return 1;
        }
        if(prev.name < next.name){
          return -1;
        }
        return 0;
      }); console.log(datosOrdenado);

      let print='';
      for (let i = 0; i < datosOrdenado.length; i++) {
        print += '<div class ="card">';
        print += `<p> ${datosOrdenado[i].num}</p>`;
        print += `<h2> ${datosOrdenado[i].name}</h2>`;
        print += `<p>${datosOrdenado[i].stats['max-hp']} HP</p>`;        
        print += `<img src = ${datosOrdenado[i].img} />`;
        print += `<p> ${datosOrdenado[i].type}</p>`;
        print += `<p>height: ${datosOrdenado[i].size['height']}</p>`;
        print += `<p>weight: ${datosOrdenado[i].size['weight']}</p>`;
        print += '</div>';  
      }
      return print;  
      //document.getElementById('container-pokemon').innerHTML = print;

    } else  if(sortOrder == 'descendente'){
      const datosOrdenado = data.sort(function(prev, next){
        if(prev.name > next.name){
          return -1;
        }
        if(prev.name < next.name){
          return 1;
        }
        return 0;
      }); console.log(datosOrdenado);

      let print='';
      for (let i = 0; i < datosOrdenado.length; i++) {
        print += '<div class ="card">';
        print += `<p> ${datosOrdenado[i].num}</p>`;
        print += `<h2> ${datosOrdenado[i].name}</h2>`;
        print += `<p>${datosOrdenado[i].stats['max-hp']} HP</p>`;        
        print += `<img src = ${datosOrdenado[i].img} />`;
        print += `<p> ${datosOrdenado[i].type}</p>`;
        print += `<p>height: ${datosOrdenado[i].size['height']}</p>`;
        print += `<p>weight: ${datosOrdenado[i].size['weight']}</p>`;
        print += '</div>';  
      }
      return print;
    }  
  }
};

export const computeStats = (data, nameFirst, nameSecond) => {

  let suma1 ='';
  let suma2 ='';
  let print1='';
  let print2 ='';
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == nameFirst) {
      suma1 = parseInt(data[i].stats['base-attack']) + parseInt(data[i].stats['base-defense']) +
        parseInt(data[i].stats['base-stamina']) + parseInt(data[i].stats['max-cp']) +
        parseInt(data[i].stats['max-hp']);  
        
      print1 += '<div class ="card">'; 
      print1 += `<p> ${data[i].num}</p>`;   
      print1 += `<h2> ${data[i].name}</h2>`;    
      print1 += `<p>${data[i].stats['max-hp']} HP</p>`;        
      print1 += `<img src = ${data[i].img} />`;
      print1 += `<p> ${data[i].type}</p>`;
      print1 += `<p>height: ${data[i].size['height']}</p>`;   
      print1 += `<p>weight: ${data[i].size['weight']}</p>`;    
      print1 += '</div>';  

    }  

    if (data[i].name == nameSecond) {
      suma2 = parseInt(data[i].stats['base-attack']) + parseInt(data[i].stats['base-defense']) +
          parseInt(data[i].stats['base-stamina']) + parseInt(data[i].stats['max-cp']) +
          parseInt(data[i].stats['max-hp']);
          
      print2 += '<div class ="card">'; 
      print2 += `<p> ${data[i].num}</p>`;   
      print2 += `<h2> ${data[i].name}</h2>`;    
      print2 += `<p>${data[i].stats['max-hp']} HP</p>`;        
      print2 += `<img src = ${data[i].img} />`;
      print2 += `<p> ${data[i].type}</p>`;
      print2 += `<p>height: ${data[i].size['height']}</p>`;   
      print2 += `<p>weight: ${data[i].size['weight']}</p>`;    
      print2 += '</div>';      
  
    }  
  }
  console.log(suma1);
  console.log(suma2);

  if (suma1>suma2){
    console.log('el mayor es ' + suma1);
    //document.getElementById('container-pokemon').innerHTML = print1;
    return print1;
  }else {
    console.log('el mayor es ' + suma2);  
    //document.getElementById('container-pokemon').innerHTML = print2;
    return print2;
  }

  
};