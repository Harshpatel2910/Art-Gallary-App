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




app.get('/', (req, res) => {

    res.sendFile('buildTable.html', { root: __dirname });
});

app.post('/query', (req, res) => {

    const re = pool.query(`${req.body.body}`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})


// table routes

app.post('/customer', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".customer`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})


app.post('/post_item', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".post_item`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})


app.post('/product_details', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".product_details`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})


app.post('/order_details', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".order_details`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})

app.post('/payment_details', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".payment_details`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})


app.post('/bidder', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".bidder`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})

app.post('/bid_product', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".bid_product`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})

app.post('/cart_item', (req, res) => {
    
    const re = pool.query(`select * from "groupId4_S10_G3".cart_item`).then((response) => res.json(response.rows)).catch((err) => res.json(err));
})


