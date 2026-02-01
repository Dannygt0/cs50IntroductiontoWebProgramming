require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Hello from the server!"});
});

app.get('/photos', async (req, res) => {
    try {
        const cityName = req.query.query;
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
        res.json(response.data.results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
