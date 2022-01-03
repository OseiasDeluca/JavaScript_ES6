const user = { // Aqui temos um usuário
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

function getUserWithFullName(user) { // Função que recebe o usuário e precisamos adicionar um novo atributo nele, criar um FullName - me retorna um usuário com esse FullName.
    return {
        // 2 conceitos/implementações novas do ECMAScript.
        ...user, // speed operator: Cada propriedade que recebermos do (user) ele colocará no nosso objeto.
        fullName: `${user.name} ${user.lastName}` // String literal seria o mesmo que: user.name + '' + user.lastName - sintaxe que usamos é mais simples.
        // O que é? R: Um user.name com user.lastName
    }
}

//  Não vamos alterar o user, mas sim criar um novo.

const userWithFullName = getUserWithFullName(user) // Chamamos a função, passando o usuário que passamos lá em cima.

console.log(userWithFullName)