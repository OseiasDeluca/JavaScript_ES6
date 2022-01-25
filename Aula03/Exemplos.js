'use strict';

const myText = 'Hello prototype';

myText.split(''); // <- de onde vem esse "split"?

// Declarações iguais 

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
// f split() { [native code] }

'use strict'

console.log(String.prototype.split);
// f split() { [native code] }

// Se compararmos o __proto__ com o prototype ele será?
'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);
// true

console.log(myText.constructor == String); // o constructor do myText é uma string?
// true

// __proto__ -> prototype -> constructor = o proto aponta para o prototype e esse prototype é criado a partir do constructor

const myText = 'Hello prototype';

myText.constructor //-> String;
myText.__proto__ // -> String.prototype;

// E se eu criar uma função? Quem será o constructor dela?
'use strict';

function Animal(){};

console.log(Animal.constructor);
// f funcion() { [ native code ] } o constructor é a função, por quê?

/* 
    f Animal.constructor -> f function -> Functio.prototype.constructor -> f object(){} -> Object.prototype = null;

    -> = aponta para

*/

'use strict'

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
//4

// O que é? 

new Foo([])

/*

O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é cahamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
3 - Caso a função construtura tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo 1.

*/

function Pessoa(name){
    this.name = name;
}

const p = new Pessoa('Guilherme')

console.log(p)

/* 
Pessoa {name: 'Guilherme'}
name: "Guilherme"
[[Prototype]]: Object
constructor: ƒ Pessoa(name)
arguments: null
caller: null
length: 1
name: "Pessoa"
prototype: {constructor: ƒ}
[[FunctionLocation]]: VM98:1
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

function Pessoa(name){
    this.name = name; // Não será retornado pois o que irá retornar será o return

    return {
        name: 'Teste'
 };
}

const p2 = new Pessoa('Guilherme');
/*
{name: 'Teste'}
name: "Teste"
[[Prototype]]: Object
*/