const person = {
    name: 'Jordi',
    surname: 'Castillo',

};

const personName = person['name']; // opción 1 para asignar

const personName2 = person.name;// opción 2 asseignar

console.log(`El nombre es:${personName}`);

person['age'] = 30; // esto crea la propiedad age

console.log(`La edad es:${person.age}`);

delete person['age']; // borrar propiedad

person.surname = 'Garcia';


//claves dinámicas

function getKey(object, key){
    return object[key];
}
const dynamicName = getKey(person, 'name');

// displayar propiedad y valor for ..in
const alien = {
    name: 'Wormuck', race: 'Cucusumusu', planet: 'Eden', weight: '259kg'
    }

    for (const prop in alien) {
        console.log(`alien.${prop} = ${alien[prop]}`);
      }