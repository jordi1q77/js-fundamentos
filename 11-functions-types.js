function sum(num1, num2 ){
    
    return num1 + num2;
}

var totalsum = sum(4,6);
console.log(`La suma total vale: ${totalsum}`);


//funciones anónimas
var hello = function () {
    return 'hello';
};

var substract = function(a,b){
    return a - b;
};

console.log(`La suma total vale: ${substract(6,3)}`);

//función flecha (arrow function)

var multiply = (a, b) =>{
    console.log('multiply');
    return a * b;
};

console.log(`La multiplicación total vale: ${multiply(6,3)}`);

//otro manera de hacer la misma función, sólo si directamente tiene return
var multiply = (a,b) => a - b;
