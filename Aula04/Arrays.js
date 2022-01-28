/* 
    Manipulação e iteração de arrays 

    - Criar um array;
    - Inserir e remover elementos;
    - Iterar elementos;
    - Buscar elementos;
    - Ordenar elementos;
    - Transformar um array em outro tipo de dados.
*/

// Criar um array
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Array.of = Cria uma nova instância de array a partir do número de parâmetros informados
const arr3 = Array.of(1, 2, 3);

const persons = Array.of('Juca', 'Joca', 'Jica')
console.log(persons)
//[ 'Juca', 'Joca', 'Jica' ]

const numberAndString = Array.of(1, 2, 'string', 'texto')
console.log(numberAndString)
//[ 1, 2, 'string', 'texto' ]

// Array = Criar uma nova instÂncia de array de acordo com os parâmetros informados
const arrWithPositions = Array(3);
console.log(arrWithPositions)
// [ <3 empty items> ]

const personsList = Array('John', 'Cris', 'Jenny')
console.log(personsList)
// [ 'John', 'Cris', 'Jenny' ]

// Array.from = Criar uma nova instÂncia de array a partie de um parâmetro array-like ou iterable object

// Executado no DevTools do chrome
const divs = document.querySelectorAll('div')

// Insesrir e remover elementos

// Push = Adiconar um ou mais elementos no FINAL do array e retorna o tamanho do novo array
const frutas = ['melancia', 'banana']

frutas.push('laranja')
console.log(frutas)
// [ 'melancia', 'banana', 'laranja' ]

// Pop = Remove o ÚLTIMO elemento de um array e retorna o elemento removido
const frutas2 = ['melancia', 'banana', 'laranja']
frutas2.pop()
// Item removido = 'laranja' 
console.log(frutas2)
// [ 'melancia', 'banana' ]

// Unshift = Adicionar um ou mais elementos no ÍNICIO do array e retorna o tamanho do novo array
const frutas3 = [ 'melancia', 'banana' ]
frutas3.unshift('laranja')
console.log(frutas3)
// [ 'laranja', 'melancia', 'banana' ]

//shift = Remove o PRIMEIRO elemento de uma array e retorna o elemento removido
const frutas4 = [ 'laranja', 'melancia', 'banana' ]
frutas4.shift()
//'laranja'
console.log(frutas4)
//[ 'melancia', 'banana' ]


//Concat = Concatena um ou mais arrays retornando um novo array
const frutas4 = [ 'laranja', 'melancia', 'banana' ]
const salgados = ['coxinha', 'kibe', 'empada']

const alimentos = frutas4.concat(salgados)
console.log(alimentos)
// [ 'laranja', 'melancia', 'banana', 'coxinha', 'kibe', 'empada' ]
// frutas4 e salgados não foram alterados.

// slice = Retorna um novo array "fatiando" o array de acordo com ínicio e fim

const arr4 = [1, 2, 3, 4, 5];

arr4.slice(0, 2)
// [1, 2]
arr4.slice(2) // a partir do elemento 2, não do número 2.
// [3, 4, 5]
arr4.slice(-1)
// [5]
arr4.slice(-3)
// [3, 4, 5]

// Splice = Altera um array adicionando novos elementos enquanto remove elementos antigos.


const arr4 = [1, 2, 3, 4, 5];

arr4.splice(2)
// [1, 2]
console.log(arr)
//[1, 2]
arr4.splice(0, 0, 'first') // Significado: Na primeira posição do meu array "0", não remove nada (segundo parâmetro: "0") e o terceiro parâmetro que passamos é o "fisrt".
// []
console.log(arr)
//["first", 1, 2]
 
// Mais exemplos de splice
const frutas5 = ['laranja', 'melancia', 'banana'];
frutas5.splice(1, 0, "acerola")
console.log(frutas5)
// [ 'laranja', 'acerola', 'melancia', 'banana' ]

frutas5.splice(2, 1, "morango", "amora") // a partir de acerola, remove 1 item "melância" e adiciona "morango" e "amora"
console.log(frutas5)
// [ 'laranja', 'acerola', 'morango', 'amora', 'banana' ]
