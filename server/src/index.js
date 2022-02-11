require('dotenv').config() 
const app = require('./app')
require('./database')

// This logic is to run the server
async function main(){

    await app.listen(app.get('port'))
    console.log('Server is running on port ', app.get('port'));
}

main();