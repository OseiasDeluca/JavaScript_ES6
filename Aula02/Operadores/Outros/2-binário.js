// in 
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           // Retorna true
3 in arvores;           // Retorna true
6 in arvores;           // Retorna false 
"cedor" in arvores;     // Retorna false (você deve especificar o número do ínidce, não o valor naquele ínidice)
"length" in arvores;    // Retorna ture (lenght é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;   // Retorna ture
var minhaString = new String("coral");
"length" in minhaString;    // Retorna true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "accord", ano: 1998};
"marca" in meucarro;    // Retorna true
"modelo" in meucarro;   // Retorna true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date){
    //code here
}