const fs = require('fs')

fs.appendFile('input.txt',' Welcome to the Pw Skill' ,'utf-8', function(err){
    if(err){
        console.log('Error in Appending File');
    } else {
        console.log('Successful Appending File');
    }
})

fs.appendFileSync('input.txt' , '- PW SKill ')