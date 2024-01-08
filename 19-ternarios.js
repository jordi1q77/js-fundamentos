const age = 30;
let isAllowed = false;

if (age > 30){
    isAllowed = true;
}else{
    isAllowed = false;
}

isAllowed = age > 30 ? true : false;

const numberA = 2;
const numberB = 4;
let operation = "multiply";
let result;

const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

result = operation === "multiply" ? numberA * numberB : numberA / numberB;

result = operation === "multiply" ? multiply(numberA,numberB) : divide(numberA,numberB);
