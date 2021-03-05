const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz Puzzle', () => {
  /*
  ** Passo 1
  ** Se não for múltiplo de 3 ou de 5 retorne ele mesmo
  */
  test('Deve retornar 0 quando passado 0', () => { 
    const result = fizzBuzz(0);
    expect(result).toEqual(0);
  });

  test('Deve retornar 7 quando passado 7', () => { 
    const result = fizzBuzz(7);
    expect(result).toEqual(7);
  });

  /*
  ** Passo 2
  ** Para os múltiplos de 3 mostre "Fizz"
  */

  test('Deve retornar Fizz quando passado 3', () => { 
    const result = fizzBuzz(3);
    expect(result).toEqual("Fizz");
  });

  test('Deve retornar Fizz quando passado 9', () => { 
    const result = fizzBuzz(9);
    expect(result).toEqual("Fizz");
  });

  /*
  ** Passo 2
  ** Para os múltiplos de 5 mostre "Buzz"
  */

  test('Deve retornar Buzz quando passado 5', () => { 
    const result = fizzBuzz(5);
    expect(result).toEqual("Buzz");
  });

  test('Deve retornar Buzz quando passado 10', () => { 
    const result = fizzBuzz(10);
    expect(result).toEqual("Buzz");
  });

  /*
  ** Passo 2
  ** Para os múltiplos de 3 e de 5 mostre "FizzBuzz"
  */

 test('Deve retornar FizzBuzz quando passado 15', () => { 
    const result = fizzBuzz(15);
    expect(result).toEqual("FizzBuzz");
  });
  
  test('Deve retornar FizzBuzz quando passado 30', () => { 
    const result = fizzBuzz(30);
    expect(result).toEqual("FizzBuzz");
  });

});