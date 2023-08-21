var name = 'Cristian';//scope global

function changeName(newName){
    name = newName; // no es buen patrón acceder a variable de scope global
}
console.log('1.name:', name)

changeName('Jordi');

console.log('2.name:', name);


function sum(a,b){
    return a + b;
}
function substract(a,b){
    return a - b;
}

function doOperation (operation, a, b){
    var sum = (num1,num2)=> num1 + num2;// shadowing a la función sum global, esta será que se llame dentro de la función

    if (operation === 'sum'){
        sum(a,b);
    }else if (operation ==='substract'){
        substract(a,b);
    }else {
        return 'Np operation';
    }
}

const result = doOperation('sum',1,4);