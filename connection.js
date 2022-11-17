const {Client} = require('pg');


const client = new Client({


    host:'localhost',

    user:'postgres',
    port:5432,
    password:'Harsh12@',

    database:'postgres',

    
    
});


module.exports = client