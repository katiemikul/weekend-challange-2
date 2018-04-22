const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/additionCollection', (req, res) => {
    console.log(req.body);
    additionCollection.push(req.body);
    res.sendStatus(200);
})
app.get('/additionCollection', (req, res) => {
    res.send(additionCollection);
})


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});