require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const connectionMongoDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', require('./routes/productRouter'));
app.use('/', require('./routes/viewRoutes'));
app.use((req, res) => res.status(404).send('Route does not exist'));


const PORT = process.env.PORT || 3030

const run = async () => {
    try {
        await connectionMongoDB(process.env.DB_URI);
        app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

run();