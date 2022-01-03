
const students = [ // Array de alunos
    // Possui dois atributos: Name e Grade.
    {
        name: 'Grace',
        grade: 7
    },
    {
        name:'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
]

function getAprrovedStudents(studentsList)  { // Função que recebe lista de alunos e lea só retorna os alunos aprovados com média maior que 7.
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados')
console.log(getAprrovedStudents(students)) // Executa a função, retornado os alunos aprovados.

console.log('\nLista de alunos:') // Lista criada não alterada.
console.log(students)