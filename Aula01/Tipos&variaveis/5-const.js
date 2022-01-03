// MAIS PARTICULARIDADES SOBRE O CONST

const name = 'Oseias'

// Não podemos alterar o valor quando for tipo primitivo (string)
// name = 'Deluca'

/*
const user = { // criando um objeto, ele permite que alteremos as propriedades dele.
    name = 'Deluca'
}
*/

// Como eu disse, podemos trocar suas propriedades
user.name = 'Outro nome'

const persons = ['Oseias', 'Pedro', 'Jennifer']

//Podemos adicionar novos itens
persons.push('Joao')
// ['Oseias', 'Pedro', 'Jennifer', 'Joao']

//Podemos remover algum item
persons.shift()
//['Pedro', 'Jennifer', 'Joao']

// Podemos alterar diretamente
persons[1] = 'James'
//['Pedro', 'James', 'Joao']

console.log ('\nArray após as alterações: ', persons)

// Array após as alterações: ['Pedro', 'James', 'João']