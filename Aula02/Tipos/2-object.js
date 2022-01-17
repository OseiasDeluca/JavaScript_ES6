const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays cotendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Merdear propriedades de objetos
Object.assign(user, {fullNmae: 'Guilherme Cabrini da Silva'});

console.log('\nAdiciona a propriedade fullName do objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mias objetos', Object.assign({}, user, {age: 26})); // Criamos um novo, não alteramos sua referência 

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj); // Congela tudo, não permite criar, alterar e remover propriedades

newObj.foo = 'changes';
delete newObj;

console.log('\nVariável newObj após as alterações:', newObj)

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Guilherme'};
Object.seal(person); // Não permite que crie ou delete propriedade.

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);