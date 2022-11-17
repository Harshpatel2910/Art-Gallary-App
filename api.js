const client = require('./connection');

const express = require('express');


const app = express();


app.listen(3000, () => {

    console.log('Server is running on port 3000');
})




client.connect();

app.get('/customer', (req, res) => {


    client.query(`set search_path to "groupId4_S10_G3"`,(err,result)=>{

        if(!err)
        {
            console.log("Connected to database");
        }
        else{
            console.log(err);
        }
        

    });

    client.query(`Select * from customer`, (err, result) => {

        if (!err) {
            res.send(result.rows);
        }
        else {
            
            console.log(err);
        }
    })

    client.end;
})



