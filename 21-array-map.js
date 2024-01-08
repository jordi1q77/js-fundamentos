// map de devuelve un nuevo array que no tiene pq ser con los mismo elementos del array origen
//pero sí de la misma longitud
// emojis = ctrl + command + espacio

const animals = ['🐼', '🐸', '🦏'];

const food = [];

const getAnimalsFood = (animal) =>{
    let animalsfood;

    if (animal === '🐼'){
        animalsfood = '🎋';
    }else if (animal === '🐸' ){
        animalsfood = '🪰';
    } else if (animal === '🦏'){
        animalsfood = '🌿';
    }
    return animalsfood;
}
/*  opción for
for (let i = 0; i < animals.length; i++){
    const animal = animals[i];
    let animalsfood;

    if (animal === '🐼'){
        animalsfood = '🎋';
    }else if (animal === '🐸' ){
        animalsfood = '🪰';
    } else if (animal === '🦏'){
        animalsfood = '🌿';
    }
    food.push(animalsfood);
}*/
// opción for each
animals.forEach(getAnimalsFood);
// opción map
const animalFood = animals.map((animal)=>{
    const food = getAnimalsFood(animal);
    
    return food;
});


console.log(`Los animales son: ${animals}`);
//console.log(`Su comida es ${food}`);
console.log(`Su comida es ${animalFood}`);
