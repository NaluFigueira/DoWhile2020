function fizzbuzz(number) {
  if(number === 0) return number; 
  let finalResult = "";
  if(number % 3 === 0) finalResult += "Fizz";
  if(number % 5 === 0) finalResult += "Buzz";
  if(finalResult.length === 0) return number; 
  return finalResult;
}

module.exports = fizzbuzz;