/* 
    Decorator
    - Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

    Conseguimos usar o decorator no typescript, basta adicionar um @
*/
//Exemplo
// Controlar a execução função que só será executada quando o usuário estiver autenticado.
let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b
}

console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));

/*
// Outro exemplo usando a sintaxe decorator

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class job {
    @readonly
    title() {return 'CEO'}
}

// Exemplo do Angular
@Component({
    selector: 'app-reactive-favorite-color',
    template: `
    Favorite Color: <input type="text [formControl]="favoriteColorControl">
    `
})

export class favoriteColorComponent {
    favoriteColorControl = new FormControl('');
}

*/