const express = require('express');
// const sheets = require('./main');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log('Listening at 5001'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

const data = "sdasda"


// api LOL https://sheet.best/admin
app.get('/asd', (req, res) => {
    axios.get('https://sheet.best/api/sheets/62832cf3-8725-4706-af1e-f10259412c29')
        .then((response) => res.json(response.data));
})

app.post('/asd', (req, res) => {
    // console.log(req.body)
})

