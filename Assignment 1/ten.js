let array = [1,2,3,4,5,6,7,8,-8,-7,-6,-5,-4,2]

for (let i = 0; i < array.length; i = i + 1) {
    if (array[i] < 0) {
        continue;
   }
   
   console.table(array[i]);
}