//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

function average(param) {
    let sum = 0;
    
    for (const num of param){
        sum += num;
    }
    return sum / param.length;
}
const numbers = [12, 21, 38, 5, 45, 37, 6]; 
const aver = average(numbers);

console.log(aver);