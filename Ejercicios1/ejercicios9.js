/*
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de 
todos los números de la matriz. Puedes usar este array para probar tu función:
*/ 
function sumAll(param) { 
    let sum = 0;
    
    for (const num of param){
        sum += num;
    }
    return sum;
}
const numbers = [1, 2, 3, 5, 45, 37, 58];
const sum = sumAll(numbers);


console.log(sum);