function vowelCounter(string) {
  if(typeof string !== "string") return "Parâmetro inválido";
  let vowelTotal = 0;
  [...string].forEach(character => {
    const lowerCaseCharacter = character.toLowerCase();
    if(lowerCaseCharacter === 'a' || 
       lowerCaseCharacter === 'e' || 
       lowerCaseCharacter === 'i' || 
       lowerCaseCharacter === 'o' || 
       lowerCaseCharacter === 'u') {
        vowelTotal++;
    }
  })
  return vowelTotal;
}

module.exports = vowelCounter;