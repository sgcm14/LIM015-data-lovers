//import { example, anotherExample } from '../src/data.js';
import { validateName } from '../src/data.js';

describe('validateName', () => {
  it('should be an function', () => {
    expect(typeof validateName).toBe('function');
  });  

  it('should throw TypeError when invoked with wrong argument types', () => { 
    expect(() => validateName()).toThrow(TypeError);
    expect(() => validateName(0)).toThrow(TypeError);
    expect(() => validateName(null)).toThrow(TypeError); 
  });

  it('should return "¡ Bienvenid@ Maestr@ Pokemon Maria !" for "Maria"', () => {    
    expect(validateName('Maria')).toEqual('¡ Bienvenid@ Maestr@ Pokemon Maria !');
  }); 

});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
