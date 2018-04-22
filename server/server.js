const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

//Addition Section
app.post('/addition', (req, res) => {
    console.log(req.body);
    additionCollection.push(req.body);
    res.sendStatus(200);
})

app.get('/request-addition', (req, res) => {
    res.send(additionCollection);
})

//Subtraction Section
app.post('/subtraction', (req, res) => {
    console.log(req.body);
    subtractionCollection.push(req.body);
    res.sendStatus(200);
})

app.get('/request-subtraction', (req, res) => {
    res.send(subtractionCollection);
})

//Multiplication Section


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});