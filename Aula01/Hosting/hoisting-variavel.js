function fn(){
    console.log(text) // Perceba que a variável ainda não foi declarada. Quando executarmos, diferentes de outras linguagens,receberemos a mensagem "undefined"

    var text = 'Exemplo'

    console.log(text)
}
fn()

/*
function fn() {
    var text
    console.log(text)

    text = 'Exemplo'

    console.log(text)
}
 */