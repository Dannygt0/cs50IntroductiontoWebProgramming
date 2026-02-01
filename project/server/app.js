require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: "Hello from the server!"});
});

app.get('/photos', async (req, res) => {
    try {
        const cityName = req.params.name;
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
        res.json(response.data.results[0]);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use(cors());
