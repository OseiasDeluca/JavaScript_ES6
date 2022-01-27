/*
    Static
        - Acessar métodos/atributos sem instanciar

*/

'use strict'

function Person() {}
Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk());
//"Walking..."


// Esse método permite chamar sem instaciar, mas por "baixo dos panos" a priemira forma terá a implemnetação da primeira
'use strict'

class Person{
    static walk() { 
        console.log('walking...');
    }
}

console.log(Person.walk())
//"Walking..."