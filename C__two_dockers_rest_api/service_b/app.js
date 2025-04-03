const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  try {
    console.log(`Service B received on port ${port} - sending request to Service A on port 3000/hello`);
    
    // Używamy nazwy kontenera "service_a" zdefiniowanej w docker-compose
    const response = await axios.get('http://service_a:3000/hello');
    const data = response.data;
    console.log(`Service B received on port ${port} ->`, data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(port, () => {
  console.log(`Service B listening on port ${port}`);
});
