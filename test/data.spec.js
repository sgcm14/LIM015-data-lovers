//import { example, anotherExample } from '../src/data.js';
import { validateName, searchPokemon, filterData, sortData, computeStats} from '../src/data.js';

//import data from '../data/pokemon/pokemon.js';


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

describe('searchPokemon', () => {
  it('should be an function', () => {
    expect(typeof searchPokemon).toBe('function');
  }); 

  it('should be an object', () => {
    expect(typeof searchPokemon('')).toBe('object');
  });  
  
  /*it('Probando', () => {
    expect(searchPokemon(data.pokemon, 'pikachu')).toEqual('pikachu');
  });*/

});

describe('filterData', () => {
  it('should be an function', () => {
    expect(typeof filterData).toBe('function');
  });  
  
  it('should be an object', () => {
    expect(typeof filterData('')).toBe('object');
  });

});

describe('sortData', () => {
  it('should be an function', () => {
    expect(typeof sortData).toBe('function');
  });  
  
  /*it('should be an object', () => {
    expect(typeof sortData('')).toBe('object');
  });  */

});

describe('computeStats', () => {
  it('should be an function', () => {
    expect(typeof computeStats).toBe('function');
  }); 
  
  it('should be an object', () => {
    expect(typeof computeStats('')).toBe('object');
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
