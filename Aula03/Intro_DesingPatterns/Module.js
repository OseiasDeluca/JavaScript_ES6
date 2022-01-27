/*
    Module
    - É um pattern que possiblita oranizarmos melhor o nosso código, sem a necessidade de expor variáveis globias.

*/

let name = 'default'

function getName(){
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
};