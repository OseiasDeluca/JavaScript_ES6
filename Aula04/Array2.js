/* 
    Manipulação e iteração de arrays 

    - Criar um array;
    - Inserir e remover elementos;
    - Iterar elementos;
    - Buscar elementos;
    - Ordenar elementos;
    - Transformar um array em outro tipo de dados.
*/


// forEach = Iteração de cada item dentro de um array

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

/*
0: 1
1: 2
2: 3
3: 4
4: 5
*/

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, arr) => {
    console.log(`${index}: ${value}: ${arr}`);
});
/*
0: 1: 1,2,3,4,5
1: 2: 1,2,3,4,5
2: 3: 1,2,3,4,5
3: 4: 1,2,3,4,5
4: 5: 1,2,3,4,5
*/

// Map = Retorna um novo array, de mesmo tamanho, itrando cada item de uma array.
const arr2 = [1, 2, 3, 4, 5];

arr.map(value => value * 2); // Não altera o array criado, pois cria um novo com os valores atualizados.
// [2, 4, 6, 8, 10]


// flat = Retorna um novo array com todos os elemnetos de um sub-array concatenados de forma recursiva de acordo com a profundidade e especificada(depth)
const arr = [20, 34, [35, 60, [70, 40]]];

arr.flat();
// [20, 34, 35, 60] - Por padrão ele já desse um nível [35, 60,] <- nível descido padrão

arr.flat(2);
// [20, 34, 35, 60, 70, 40] // 2 níveis [35, 60, [70, 40]]

//flatMap = Retorna um novo array assim como a função map e executa um flat de profundidade 1
const arr3 = [1, 2, 3, 4];

arr3.flatMap(value => [value * 2]);
// [2, 4, 6, 8]

arr3.flatMap(value => [[value * 2]]);
// [[2], [4], [6], [8]]

// Keys = Retorna um Array Iterator que contém as chaves para cada elemento do array
const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();
// {value: 0, done: false}

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: true}

// entries = Retorna um Arrray Iterator que contém os pares chave/valor para cada elemtno do array
const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next();
// {value: [0, 1], done: false}

arrIterator.next();
// {value: [1, 2], done: false}

arrIterator.next();
// {value: [2, 3], done: false}

arrIterator.next();
// {value: [3, 4] done: true}

// find = Retorna o PRIMEIRO ITEM de um array que satisfaz a condição
const arr = [1, 2, 3, 4]

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);
// 3

//findIndesx = Retorna o índice do primeiro item de um array que satifaz a condição 
const arr = [1, 2, 3, 4]

const firstIndexGreaterThanTwo = arr.find(value => value > 2);

console.log(firstIndexGreaterThanTwo);
// 2 = é mutio semelhante ao find, mas ele retorna o valor do índice, não o item.

//filter = Reorna um novo array com todos os elemntos que satisfazem a condição
const arr = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr.filter(value => value > 2); // retorne um novo array com todos os itens maiores do que 2

console.log(allValuesGreaterThanTwo);
// [3, 4]

// indexOf = Retorna o PRIMEIRO ÍNDICE em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem)
// 1

// lastIndexOf = Retorna o último índice em que um elemento pode ser encotrado no array
const arr = [1, 3, 3, 4, 3];

const lastIndexOfItem = arr.lastIndexOf(3);

console.log(lastIndexOfItem)
// 4


// includes = Retorna um booleano verificando se determinado elemento existe no array
const arr = [1, 3, 3, 4, 3];

const hasItemOne = arr.includes(1); // Esse array tem o item 1?
// true

const hasItemTwo = arr.includes(2); // Esse array tem o item 2?
// false

// some = Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

const arr = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
// true

const students = [
    {name:'Juca', grade: 7},
    {name: 'Cururu', grade: 5},
    {name:'seu minino', grade: 4}
];

students.some(student => student.grade >= 7)
// true - fazer no DevTools

// every = Retorna um booleano verificando se todos os itens de um array satisfazem a condição
const arr = [1, 3, 3, 4, 3];

const allEvenNumbers = arr.every(value => value % 2 === 0); // Todos esses números são pares?
// false

// exemplo com o array de cima
students.every(student => student.grade >= 7) // Todos os alunos passaram?
// False = Não

students.find(student => student.grade >= 7) // Primeiro estudante que não passou:
// {name: 'Cururu', grade: 5}

// sort = Ordenar elemtnos de um array de acordo com a condição
students.sort((current, next) => current.grade - next.grade)

// {name:'seu minino', grade: 4}
// {name: 'Cururu', grade: 5}
// {name:'Juca', grade: 7}

students.sort((current, next) => next.grade - current.grade)

//  {name:'Juca', grade: 7},
// {name: 'Cururu', grade: 5}
// {name:'seu minino', grade: 4}

// reverse = Invete os elementos de um array
const arr = [1, 2, 3, 4, 5];

arr.reverse();
// [5, 4, 3, 2, 1]

// Transformar em outro tipo de dados

// joim = junta todos os elementos de um array, separados por um delimitador e retorna uma string
const arr = [1, 2, 3, 4, 5]

arr.join('-');
//"1-2-3-4-5"

// reduce = Retorna um novo tipo de dado iterando cada posição de um array
const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0) // primeiro argumento = total, tipo inteiro começa com 0
// 15

students.reduce((totalGrades, student) => totalGrades += student.grade, 0)
// 16
students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length
// 5.333

students.reduce((studentsName, student) => studentsNames += student.name + '', '')
// Juca Cururu seu minino