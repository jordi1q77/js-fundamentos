// filter crea un nuevo array con un subconjunto del array inicial


const animals = [{icon: '🐼', herbal:true} ,{icon:'🐣',herbal:false},{icon : '🐮',herbal: true} ,
{icon:'🦁',herbal : false}];
let herbAnimals = [];
herbAnimals = animals.filter((animal) => {
    return animal.herbal; // si devolvemos true estará en el nuevo array
   
}).map((animal) =>{
    return animal.icon;
});

console.log(herbAnimals);