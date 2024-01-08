
const fridgeFood = [
    {food :'Ramen', id:1},
    {food :'Pollo', id:2},
    {food :'Fideos', id:3},
    {food :'Arroz', id:4},
    {food :'Ramen', id:5}];

fridgeFood.reverse();// realmente le da la vuelta
console.log(fridgeFood);

//para evitar cambiar el principal hacer una copia con slice
const reverseFridgeFood = fridgeFood.slice().reverse();
