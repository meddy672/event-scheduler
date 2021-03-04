// Dependencies
const express = require('express');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', (req, res, next) => {

});

// Listening port
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});