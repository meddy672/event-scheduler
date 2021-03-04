// Dependencies
const express = require('express');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', (req, res, next) => {
    res.send('Hello World')
});
app.post('/create-event', (req, res, next) => {
    
})

app.put('/update-event', (req, res, next) => {
    
})

app.delete('/delete-event', (req, res, next) => {
    
})


// Listening port
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});