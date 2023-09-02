//Completa la función que tomando dos números como argumento devuelva el más alto.

function max(numberOne , numberTwo) { 
    let max = 0;
    if (numberOne > numberTwo){
        max = numberOne;
    }else{
        max = numberTwo;
    }
    return max;
}

for (let i = 0; i < 10;i++){
    console.log(i);
    console.log(max(i,6));

}
