/*Calcular promedio de strings: Crea una función que reciba por parámetro un array y 
cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función:
*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']; 
function averageWord(param) {
    let aver = 0;
 
    for (const element of param){
        aver += (typeof(element)==="string")?element.length:element;
    }
    return aver;
}
const average = averageWord(mixedElements);
console.log(average);