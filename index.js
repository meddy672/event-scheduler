// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const eventsRoutes = require('./routes/events')


// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/events', eventsRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });

const port = 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
});