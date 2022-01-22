let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr){
    console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr){ // of só executa propriedades númeradas.
    console.log(i); // logs "3", "5", "7"
}