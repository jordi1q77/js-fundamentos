const marks = [10,6,4,7,5,4,3,9];

const indexMarks = marks.indexOf(7);

console.log(indexChicken);
// también existe el lastIndexOf que empieza por el final


const fridgeFood = [
    {food :'Ramen', id:1},
    {food :'Pollo', id:2},
    {food :'Fideos', id:3},
    {food :'Arroz', id:4},
    {food :'Ramen', id:5}];

const index = fridgeFood.findIndex((food) => {
    if (food.food ==='Ramen'){
        return true;
    }
});

// ojo!!! si no encuentran ningún valor que cumpla devuelven -1