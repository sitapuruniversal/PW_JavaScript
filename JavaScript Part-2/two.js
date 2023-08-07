// Function with the parameter 
// function with the declaration 

function displayMesseage(messageToBeDisplay){
    console.log(messageToBeDisplay);
}
// displayMesseage("I am a Happy to be learn WEB Deveploment")
// displayMesseage();
// res1 = displayMesseage();

function displayMesseage(
    messageToBeDisplay = "I am a Proud of PW SKill"
    ){
    console.log(messageToBeDisplay);
}
displayMesseage("I am a Happy to be learn WEB Deveploment")
displayMesseage();

// Sum of Two Digit 

function sumOfTwonumber(num1,num2){
    return num1 + num2;
}
let result = sumOfTwonumber(10,30)
console.log(result);

// Second Method
function sumOfTwonumber(num1,num2){
    return num1 + num2;
}
// let num1 = 50
// let num2 = 100
// let results = sumOfTwonumber(num1,num2)
// console.log(results);

// Welcome to the Pass Value in array 
function sumOfTwonumber([a,b]){
    return a + b;
}
let sums = [100,200];
let res = sumOfTwonumber(sums);
console.log(res);


