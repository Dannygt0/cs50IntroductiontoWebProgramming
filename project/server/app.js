const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.json({ message: "Hello from the server!"});
});

app.get('/city/:name', (req, res) => {
    const cityName = req.params.name;
    res.json({ message: `You are looking for info about ${cityName}` });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
