/*
    Factory
    - Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções FACTORY(FÁBRICA).
*/

function FakeUser(name, lastName) {
    this.name = 'Guilherme',
    this.lastName = 'Cabrini'
}

// Não é factory
const user = new FakeUser();

function Pessoa(){
    return{
        name: 'Guilherme',
        lastName:'Cabrini'
    }
}

// Factory
const p = Pessoa();
console.log(p)

// Outro exemplo

function Pessoa(name){ // Exemplo de que no factory não depende só de funções estaticas
    return{
        name,
        lastName:'Cabrini'
    }
}

// Factory
const p = Pessoa('Custom name');
console.log(p)

// Exemplo 3

function Pessoa(CustomProperties){
    return{
        name: 'Guilherme', // Valor padrão
        lastName:'Cabrini',
        ...CustomProperties 
    } 
}
// Factory
const p = Pessoa({name: 'Custom Name', age: 27});
console.log(p)