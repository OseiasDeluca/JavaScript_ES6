function soma(a) { // Na primeira função só recebo o "a", // Esse "a" retorna uma nova função "b"
    return function(b) { 
        return a + b
    }
}

const soma2 = soma(2) // soma2, será armazenado em uma variável, logo meu "a", nessa função sempre será 2.
// quando eu executar soma(2)
// Função retornada:
/* return function(b) { 
    return a + b
}
*/

console.log(soma2(2)) // Temos oprimeiro parâmetro memorizado.
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))