// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require("helmet");
const eventsRoutes = require('./routes/events');


// App
const app = express();
const port = process.env.PORT || 5000;
const dbName = process.env.DB_NAME || 'events';
const dbHost = process.env.DB_HOST || 'localhost';

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Event Routes
app.use('/events', eventsRoutes);


// Default Error Handler
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });



// Setup Database connection
mongoose.connect(`mongodb://${dbHost}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
})
