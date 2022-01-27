'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cahorro.__proto__ === Animal.prototype);
// true

console.log(cahorro.__proto__ === Function.prototype);
// true

console.log(cachorro);

/*
Animal {qtdePatas: 4}
qtdePatas: 4
[[Prototype]]: Object
constructor: ƒ Animal()
arguments: null
caller: null
length: 0
name: "Animal"
prototype: {constructor: ƒ}
[[FunctionLocation]]: VM414:1
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[2]
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/

// Comseguimos ver também de quem é a instância;

console.log(cahorro instanceof Animal);
// true

console.log(cachorro instanceof Function);
// false


// Exemplo 
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

// Outro exemplo

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function(){}
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function(){
        console.log('Au! au!')
    }
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)

// Toda vez que dermos aum new Cachorro a função latir e movimentar serão criadas novamente
// Para que isso não aconteça, fazemos:

function Animal(){}

Animal.prototype.qtdePatas = 0; // portotype contém a definição do meu objeto, logo ele tem uma quantidade de patas e 
Animal.prototype.movimentar = function() {} // também se movimenta

function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au! au!');
}

const pug = new Cachorro(false) // não será criado as funçõese já estão declaradas
const pitbull = new Cachorro(true)