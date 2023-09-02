//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

function average(param) {
    let aver = 0;
    for(let i = 0; i < param.length; i++){
        aver = aver + param[i];
    }
    aver = aver / param.length;
    return aver;
}
const numbers = [12, 21, 38, 5, 45, 37, 6]; 
const aver = average(numbers);

console.log(aver);