// Retorna o tamanho de uma string
const textSize = 'Texto' .length;
console.log(`Quantaidade de letras: ${textSize}`);

// Retorna uma array quebrando a string por um delimitador
const splittedText = 'Texto' .split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto' .replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacedText);

//Retorna a "fatia" de uma valor
const lastChar = 'Texto' . slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastchar = 'Texto' .slice(0, -1);// Pega da primeira posição até a última. 
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastchar);

const secondToEnd = 'Texto' . slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd)

// Retorna N caracteres a parit de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);