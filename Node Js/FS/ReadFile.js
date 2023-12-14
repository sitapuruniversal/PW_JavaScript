const  fs = require('fs')

// Reading File asyncrouons

fs.readFile('input.txt', function(err, data){
    if(err) {
        console.log('Reading File Error > ', err);
    } else {
        console.log('Data is : ', data.toString())
        console.log("Reading File Successful");
    }
})

// Reading File syncrouns 

const filedata = fs.readFileSync('input.txt')
console.log('Reading File sync is : ',filedata.toString());