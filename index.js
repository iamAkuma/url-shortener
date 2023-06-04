const express = require('express');
const connectDB = require('./config/db');

const app = express();

//COnnect to database
connectDB();

app.use(express.json({ extended: false}));

//Define Routes
app.use('/', require('./routes/index'));
app.use('/api/uri', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log( `Server running on port ${PORT}`));