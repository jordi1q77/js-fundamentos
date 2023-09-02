/**
 * Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y 
 * elimina los que incluyan la palabra gato. 
 * Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:
 */

const toys = [
    {id: 5, name: 'Buzz MyYear'},
    {id: 11, name: 'Action Woman'},
    {id: 23, name: 'Barbie Man'},
    {id: 40, name: 'El gato con Guantes'}, 
    {id: 40, name: 'El gato felix'}
    ];
const toysNoCat = [];
   
    for (let [i,value] of toys.entries()){
        console.log(i,value.name);
        if (!value.name.includes("gato")){
            toysNoCat.push(toys[i]);
        }
       /* if (value.name.includes("gato")){
            console.log(value);
            toys.splice(i,1); // no se puede usar el slice pq afecta al índice y se rompe el bucle
        }*/
        
    }    
    console.log(toysNoCat);