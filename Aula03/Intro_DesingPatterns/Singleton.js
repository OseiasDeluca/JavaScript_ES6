/*
    Singleton:
    - O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez que for necessário utilizá-la.

*/

// Pode ser uma variável global
var SETTINGS = {
    api:'http://localhost',
    trackJsToke:'12345'
}

// Outro exemplo

function MyApp() {
    if (!MyApp.instance){ // Caso a variável instace não for definida
        MyApp.instance = this; // Vai e instancia   
    }

    return  MyApp.instance; // Caso já exista retorna a mesma instancia
}

// Exemplo prático
function Pessoa(){
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Guilherme'});

const p2 = Pessoa.call({ name: 'Custon Name'});

console.log(p);

console.log(p2);