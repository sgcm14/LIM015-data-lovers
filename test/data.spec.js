//import { example, anotherExample } from '../src/data.js';

import { validarNombre } from '../src/data.js';


describe('main', () => {
  it('Validar que es una funcion', () => {
    expect(typeof validarNombre).toBe('function');
  });

  it('validar si es vacio', () => { 

    expect(() => validarNombre()).toThrow(TypeError);
    expect(() => validarNombre(0)).toThrow(TypeError);
    expect(() => validarNombre(null)).toThrow(TypeError);
      
  });

  // it('ingreso dato correcto', () => {    
  //   expect(validarNombre("a")).toEqual("a");
  // });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
