var test = 'example'; // Criamos uma variável de escopo global.

(() => { // Função de execução imediata - mais pra frente falaremos sobre (=> - if de aerrow function) 
    console.log(`Valor dentro da função "${test}"`); // escopo que ela vai subir

    if (true) { // => - if de aerrow function)
        var test = 'example' // mudamos o valor dela dentro desse bloco e ela vai subir dentro do escopo
        // o var NÃO TEM ESCOPO DE BLOCO
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(` Valor após a execução do if "${test}"`); // mostrar o que aconteceu com a variável teste?
})();

// Lembrar do ponto e vírgula.

/*

Exemplo de como ela está sendo executada.

Por causa do hoisting ele sabe onde está apontando a variável.

(() => {
    var teste;
    console.log(`Valor dentro da função "${test}"`); 

    if (true) { 
        test = 'example' 
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(` Valor após a execução do if "${test}"`); 
})();
*/