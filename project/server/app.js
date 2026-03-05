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
        res.json(response.data.results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
