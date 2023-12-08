require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const newsRoutes = require('./routes/newsRoutes');
app.use(newsRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});