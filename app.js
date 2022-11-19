const express = require('express');
const pool = require('./connection');
const morgan = require('morgan');

const app = express();


app.listen(3000, () => {

    console.log('Server is running on port 3000');
})
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.sendFile('index.html', { root: __dirname });
});



pool.query(`set search_path to "groupId4_S10_G3"`, (err, result) => {

    if (!err) {
        console.log("Connected to database");
    }
    else {
        console.log(err);
    }


});



app.get('/', (req, res) => {

    res.sendFile('buildTable.html', { root: __dirname });
});

app.post('/query', (req, res) => {

    const re = pool.query(`${req.body.body}`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})




