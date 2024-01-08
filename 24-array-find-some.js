const fridgeFood = [
{food :'Ramen', id:1},
{food :'Pollo', id:2},
{food :'Fideos', id:3},
{food :'Arroz', id:4},
{food :'Ramen', id:5}];

//encuentra el primer elemento y lo asigna a chicken
const chicken = fridgeFood.find((food, index) =>{
    if (food.food === 'Pollo'){
        return true;
    }
});

console.log(chicken);

//Dice si existe un elemento true or false
const haveChicken = fridgeFood.some((food, index) => food.food === 'Pollo');

console.log(haveChicken);