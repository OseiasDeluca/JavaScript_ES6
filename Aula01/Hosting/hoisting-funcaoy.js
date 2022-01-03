function fn() {
    log('Hoisting de função') // Estamos usando, mais só declaramos ela embaixo. Mas mesmo assim, conseguiremos dar um console,log nele

    function log(value) {
        console.log(value)
    }
}

fn()

// Devemos configurar algum linter para não acontecer isso.
// Ou seja não permitir chamar uma função antes de cria-lá.
// Boa prática sempre declarar a função antes de usar.

/*
function fn() {
    function log(value) {
        console.log(value)
    }

    log ('Hoisting de função)
}
*/ 