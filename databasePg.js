const {Client} = require('pg');


const client = new Client({
    

    host:'localhost',
    user:'postgres',
    port:5432,
    password:'Harsh12@',
    database:'postgres'

    
});




client.connect();


client.query(`Select * from customer`,(res,err)=>{


    if(!err)
    {
        console.log(res.rows);
    }
    else
    {
        console.log(err);
    }
    client.end;


})
