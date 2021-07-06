import { validateName, searchPokemon, filterData, sortData, computeStats} from '../src/data.js';
//import data from '../src/data/pokemon/pokemon.js'; //.. una carpeta arriba

//const datos = data.pokemon;

const input = 
[
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
  {num: '004', name: 'charmander', type: ['fire' ]},
  {num: '005', name: 'charmeleon', type: [ 'fire' ]},
  {num: '114', name: 'tangela', type: [ 'grass']},
];

const inputSortDesc = 
[
  {num: '004', name: 'charmander', type: ['fire' ]},
  {num: '114', name: 'tangela', type: [ 'grass']},
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
  {num: '005', name: 'charmeleon', type: [ 'fire' ]},
];

const outputSearch = [
  {num: '005', name: 'charmeleon', type: [ 'fire' ]},
];

const outputFilter = [
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
  {num: '114', name: 'tangela', type: [ 'grass']},
];

const outputSortAsc = [
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '004', name: 'charmander', type: ['fire' ]},
  {num: '005', name: 'charmeleon', type: [ 'fire' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '114', name: 'tangela', type: [ 'grass']},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
];

const outputSortDesc = [
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
  {num: '114', name: 'tangela', type: [ 'grass']},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '005', name: 'charmeleon', type: [ 'fire' ]},
  {num: '004', name: 'charmander', type: ['fire' ]},
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
];

const inputComputeStats = 
[
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ],
    stats: {['base-attack']: '118', ['base-defense']: '111', ['base-stamina']: '128', ['max-cp']: '1115','max-hp': '113'}},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ],
    stats: {['base-attack']: '151', ['base-defense']: '143', ['base-stamina']: '155', ['max-cp']: '1699','max-hp': '134'}},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ],
    stats: {['base-attack']: '198', ['base-defense']: '189', ['base-stamina']: '190', ['max-cp']: '2720','max-hp': '162'}},
  {num: '004', name: 'charmander', type: [ 'fire'],
    stats: {['base-attack']: '116', ['base-defense']: '93', ['base-stamina']: '118', ['max-cp']: '980','max-hp': '105'}},
];

const outputComputeStats = 
[
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ],
    stats: {['base-attack']: '151', ['base-defense']: '143', ['base-stamina']: '155', ['max-cp']: '1699','max-hp': '134'}},
];


const inputSortAsc0 = 
[
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '005', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
 
];

const outputSortAsc0 = 
[
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '005', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
 
];


const outputSortDesc0 = 
[   
  {num: '003', name: 'venusaur', type: [ 'grass', 'poison' ]},
  {num: '002', name: 'ivysaur', type: [ 'grass', 'poison' ]},  
  {num: '001', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  {num: '005', name: 'bulbasaur', type: [ 'grass', 'poison' ]},
  
  
];

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
  
  it('should search charmeleon', () => {
    expect(searchPokemon(input,'charmeleon')).toEqual(outputSearch);
  });

});

describe('filterData', () => {
  it('should be an function', () => {
    expect(typeof filterData).toBe('function');
  });  
  
  it('should be an object', () => {
    expect(typeof filterData('')).toBe('object');
  });

  it('should filter for grass', () => {
    expect(filterData(input, 'grass')).toEqual(outputFilter);
  });

});

describe('sortData', () => {
  it('should be an function', () => {
    expect(typeof sortData).toBe('function');
  });  
  
  it('should be an object', () => {
    expect(typeof sortData('')).toBe('object');
  }); 

  it('should sort for ascedente', () => {
    expect(sortData(input, 'name', 'ascendente')).toEqual(outputSortAsc);
  });

  /*it('should sort for descedente', () => {
    expect(sortData(input, 'name', 'descendente')).toEqual(outputSortDesc);
  });*/

  it('should sort for descedente ', () => {
    expect(sortData(inputSortDesc, 'name', 'descendente')).toEqual(outputSortDesc);
  });

  it('should sort for ascedente prueba', () => {
    expect(sortData(inputSortAsc0, 'name', 'ascendente')).toEqual(outputSortAsc0);
  });

  it('should sort for descedente prueba', () => {
    expect(sortData(inputSortAsc0, 'name', 'descendente')).toEqual(outputSortDesc0);
  });

});

describe('computeStats', () => {
  it('should be an function', () => {
    expect(typeof computeStats).toBe('function');
  }); 
  
  it('should be an object', () => {
    expect(typeof computeStats('')).toBe('object');
  }); 

  it('should show pokemons with more stats (2nd)', () => {
    expect(computeStats(inputComputeStats, 'bulbasaur', 'ivysaur')).toEqual(outputComputeStats);
  });

  it('should show pokemons with more stats  (1st)', () => {
    expect(computeStats(inputComputeStats, 'ivysaur', 'bulbasaur')).toEqual(outputComputeStats);
  });

});
