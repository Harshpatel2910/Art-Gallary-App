const express = require('express');
const pool = require('./connection');
const morgan = require('morgan');

const app = express();


app.set('view engine', 'ejs');

app.listen(3000, () => {

    console.log('Server is running on port 3000');
})
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.sendFile('index.html', { root: __dirname });
});


app.post('/query', (req, res) => {
    var data = [];
    pool.query(`${req.body.body}`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    })
        .catch((err) => res.json(err));
})


app.get('/customer', (req, res) => {

    var data = [];

    pool.query(`select * from "groupId4_S10_G3".customer`).then((result) => {
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));

})

app.get('/post_item', (req, res) => {
    var data = [];
    pool.query(`select * from "groupId4_S10_G3".post_item`).then((result) => {
        //console.log(result.rows)
        res.render("buildtable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})

// table routes
app.post('/customer', (req, res) => {

    pool.query(`select * from "groupId4_S10_G3".customer`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/post_item', (req, res) => {

    pool.query(`select * from "groupId4_S10_G3".post_item`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/product_details', (req, res) => {

    pool.query(`select * from "groupId4_S10_G3".product_details`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/order_details', (req, res) => {

    pool.query(`select * from "groupId4_S10_G3".order_details`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})

app.post('/payment_details', (req, res) => {
    pool.query(`select * from "groupId4_S10_G3".payment_details`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})


app.post('/bidder', (req, res) => {

    pool.query(`select * from "groupId4_S10_G3".bidder`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})

app.post('/bid_product', (req, res) => {
    pool.query(`select * from "groupId4_S10_G3".bid_product`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });

    }).catch((err) => res.json(err));
})

app.post('/cart_item', (req, res) => {
    pool.query(`select * from "groupId4_S10_G3".cart_item`).then((result) => {
        res.render("buildTable", {
            data: {
                result1: result.rows
            },
        });
    }).catch((err) => res.json(err));
})

////
app.post('/insertcustomer', (req, res) => {
    const data = [];
    console.log(req.body);

    pool.query(`insert into "groupId4_S10_G3".customer values('${req.body.id}','${req.body.Name}','${req.body.User_name}','${req.body.User_type}','${req.body.Password}','${req.body.Address}',${Number(req.body.Telephone)},'${req.body.Email}','${req.body.city}')`).then((result) => {
        res.redirect('/customer');
    }).catch((err) => res.json(err));
})

app.post('/insertpost_item', (req, res) => {
    const data = [];
    console.log(req.body);

    pool.query(`insert into "groupId4_S10_G3".post_item values('${req.body.product_id}','${req.body.id}','${req.body.Product_name}','${req.body.Categoty}','${req.body.Price}' , '${req.body.Description}')`).then((result) => {
        res.redirect('/post_item');
    }).catch((err) => res.json(err));
})