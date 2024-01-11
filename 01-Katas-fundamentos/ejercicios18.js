/*
Probando For: Usa un bucle for para recorrer todos los destinos del array
 y elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array. Puedes usar este array:
*/

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Pamplona'}];
const lessPlaces = [];

for (let i = 0; i < placesToTravel.length; i++){
    if (placesToTravel[i].id != 11 && placesToTravel[i].id != 40){
        lessPlaces.push(placesToTravel[i]);
    }
}

console.log(lessPlaces);

// Segunda manera de hacerlo con el mismo array

for (let i = 0; i < placesToTravel.length; i++){
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40){
        placesToTravel.splice(i,1);
        i--;//rectificamos i ya que hemos eliminado un elemento
    }
}

console.log(placesToTravel);
