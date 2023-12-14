const fs = require('fs');

// File path
const filePath = './input.txt';
// open file 
fs.open(filePath,'r+', function(err, fd){
    if (err){
        console.log('Error in Open File', err);
    } else {
        console.log('Open File seccfull ',fd.toString());
        console.log('Opening File Done');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        console.log(data); // Outputs the content of the file
      });
      
})

// Reading file asynchronously
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }
//   console.log(data); // Outputs the content of the file
// });
