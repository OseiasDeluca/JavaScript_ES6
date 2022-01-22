/*
switch (expresão){
    case valor1:
        [expressão]
        break;
    case valor2:
        [expressão]
        break;
    default:
        break;

}
*/

const fruit = 'pera';

switch (fruit){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque.')
        break;
}