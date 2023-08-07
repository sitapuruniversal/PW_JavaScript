// Function with unlimited function 
// function declaration 
function sumOfAllParameters() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++)
    sum += arguments[i];
    return sum;
}
// Function Call 
let result = sumOfAllParameters(10,20,30,50,60,80);
console.log(result);