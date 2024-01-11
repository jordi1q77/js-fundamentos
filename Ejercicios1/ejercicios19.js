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
    {id: 40, name: 'El gato felix'},
    {id: 40, name: 'El gato felix'},
    {id: 23, name: 'Barbie Man'},
    {id: 46, name: 'El gato felix'}
    ];
    for (let i = 0; i < toys.length;i++){
        if (toys[i].name.includes('gato')){
            toys.splice(i,i+1);
            i--;//compensamos q hemos eliminado un elemento
        }
    }
        ///oojojoj - se embucla
       
    console.log(toys);