/**
 * Usa un for para remplazar todas las comidas que no sean veganas con las frutas
del array de frutas. Recuerda no usar frutas duplicadas. Finalmente,
imprime el array resultante.

 */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let j = 0;

for (let i = 0; i < foodSchedule.length;i++){
    if (!foodSchedule[i].isVegan){
        foodSchedule[i].isVegan = true;
        foodSchedule[i].name = fruits[j];
        j++;
    }
}

console.log(foodSchedule);