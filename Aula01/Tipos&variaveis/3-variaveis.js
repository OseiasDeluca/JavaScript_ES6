(() => {
    let test = 'Valor função'; // let e const respeitam o escopo de bloco logo, essa variável somente aparecerá no útlitmo console
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        let test = 'valor if' // Aqui dentro é esse let que "comanda"
        console.log(`Valor dentro do if "${test}"`)
    }
    if (true) {
        let test = 'Valor de outro if' // Aqui dentro é esse let que "comanda", independente de quantos if tiverem, sempre o let respeitará o escopo de bloco
        console.loj(`Valor de outro if "${test}"`)
    }

    console.log(`Valor após a execução do if "${test}"`) // Aqui
    
})();