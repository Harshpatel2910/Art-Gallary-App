const express = require('express');

const morgan = require('morgan');

const app = express();


app.listen(3000, () => {

    console.log('Server is running on port 3000');
})
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.get('/', (req, res) => {

    res.sendFile('buildTable.html', { root: __dirname });
});

app.get('/customer', (req, res) => {

    res.redirect('/customer');
});
