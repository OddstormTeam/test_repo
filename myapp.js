const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {    
    res.send('Home page!');
});

app.get('/tigers', function (req, res) {
    
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});