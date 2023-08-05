const array = [1,2,999,56,'Mithun',1234,'PW']

for (let i = 0; i < array.length; i = i+1) {
    if (typeof array[i] === "string") {
        console.log("Found the First String is : ", array[i]);
        break;
    }
}

