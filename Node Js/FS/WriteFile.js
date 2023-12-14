const fs = require('fs')

fs.writeFileSync('input.txt', 'Updated Data By Sunil Kumar',function (err) {
    if (err) {
        console.log('Error in Writing File');
    } else {
        console.log('Success in Writing File');
    }
})
