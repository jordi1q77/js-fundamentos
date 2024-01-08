const numbers = [1,4,6,3,2,1,0,9];
let count = 0;


for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 3){
        count++;
    }
}

// también se puede hacer así
// number - contenido, index - índice
numbers.forEach((number, index) =>{
    if (number > 3){
        count++;    
    }
})
