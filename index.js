// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const events = [];
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Routes
app.use('/', (req, res, next) => {
    res.send('Hello World');
});

app.post('/create-event', (req, res, next) => {
    
})

app.put('/update-event', (req, res, next) => {
    
})

app.delete('/delete-event', (req, res, next) => {
    
})

const port = 3000;
// Listening port
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
});