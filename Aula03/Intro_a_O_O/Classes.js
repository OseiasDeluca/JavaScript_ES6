/*
    Classes
        - ES6;
        - Simplificação da herança de protótipos;
        - Palavra chave 'class'

*/


// Exemplo - Antigo
function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas; // Leia as linhas 62 e 67 primeiramente. -> Logo esse 'this' será o pug
}

function Cachorro(morde){
    Animal.call(this, 4); // call permite que passemos um contexto de objeto novo

    this.morde = morde;
}

const pug = new cachorro(false); // Objeto novo

console.log(pug)
// Cachorro {qtdePatas: 4, morde: false}

// Versão ES6 - Atual

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new cachorro(false); 

console.log(pug)
// Cachorro {qtdePatas: 4, morde: 4e}


// Controladores de acesso;

'use strict'

function Person(initialName) {
    let name = initialName;

    this.getName = function(){
        return name;
    }

    this.setName = function(newname) {
        name = newName;
    }
}

const p = new Person('Guilherme');

'use strict'

console.log(p)
// Person {getName: f, setName: f}

p.getName();
//"Guilherme"

p.name;
// undefined

p.setName('Thiago');
p.getName();
// "Thiago"

//Função que funciona no ES12 e node
'use strict'

class Person {
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

console.log(p)
// Person {}

p.getName();
//"Guilherme"

p.name;
// undefined

p.setName('Thiago');
p.getName();
// "Thiago"
