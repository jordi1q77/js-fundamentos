/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor 
que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
en caso que existan nos devuelve un true y la posición de dicho elemento
 y por la contra un false. Puedes usar este array para probar tu función:
*/

const nameFinder = [ 'Peter',
'Steve',
'Tony', 'Natasha', 'Clint',
'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'
];


function finderName(param, name) {
const nameFinded = {
        name: "",
        exists: false,
        index: 0,
    
    };
    nameFinded.name = name;
    for(let i = 0; i < param.length; i++){
        
        if (param[i] === nameFinded.name){
            nameFinded.exists = true;
            nameFinded.index = i;
        }

    }

    return nameFinded;
}

let nameFinded = {
    name: "",
    exists: false,
    index: 0,

};

nameFinded = finderName(nameFinder,'Peggy');
console.log(nameFinded);