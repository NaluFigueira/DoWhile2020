const vowelCounter = require('./vowelCounter');

describe('vowelCounter Puzzle', () => {
  /*
  ** Passo 1
  ** Retornar erro caso o parâmetro não seja uma string
  */

  test('Dever retornar Parâmetro inválido quando passado número', () => {
    const result = vowelCounter(0);
    expect(result).toEqual("Parâmetro inválido");
  });

  test('Dever retornar Parâmetro inválido quando passado objeto', () => {
    const result = vowelCounter({});
    expect(result).toEqual("Parâmetro inválido");
  });

  /*
  ** Passo 2
  ** Retornar número de vogais de strings
  */

 test('Dever retornar 4 quando passado Madeira', () => {
   const result = vowelCounter("Madeira");
   expect(result).toEqual(4);
 });
 
 test('Dever retornar 0 quando passado CDB', () => {
   const result = vowelCounter("CDB");
   expect(result).toEqual(0);
 });

 /*
  ** Passo 3
  ** Retornar número de vogais de uma ou mais palavras
  */

  test('Dever retornar 6 quando passado Madeira Grande', () => {
    const result = vowelCounter("Madeira Grande");
    expect(result).toEqual(6);
  });

  test('Dever retornar 4 quando passado Madeira LST', () => {
    const result = vowelCounter("Madeira LST");
    expect(result).toEqual(4);
  });

  test('Dever retornar 2 quando passado CDB Grande', () => {
    const result = vowelCounter("CDB Grande");
    expect(result).toEqual(2);
  });

  test('Dever retornar 0 quando passado CDB LST', () => {
    const result = vowelCounter("CDB LST");
    expect(result).toEqual(0);
  });

  /*
  ** Passo 4
  ** A função deve ser capaz de contar vogais maiúsculas e minúsculas
  */

  test('Dever retornar 2 quando passado Uva', () => {
    const result = vowelCounter("Uva");
    expect(result).toEqual(2);
  });

  test('Dever retornar 2 quando passado Olho', () => {
    const result = vowelCounter("Olho");
    expect(result).toEqual(2);
  });


});