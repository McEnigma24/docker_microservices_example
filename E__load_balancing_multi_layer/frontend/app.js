const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// Pobieramy URL backendu z zmiennej środowiskowej lub używamy domyślnego
const backendUrl = process.env.BACKEND_URL || 'http://backend-lb:80';
const serviceName = process.env.SERVICE_NAME || 'frontend';
const instanceId = Math.floor(Math.random() * 10000); // Unikalny identyfikator instancji

app.get('/', async (req, res) => {
  try {
    console.log(`${serviceName}:${instanceId} received request on port ${port} - sending request to ${backendUrl}/hello`);
    
    // Łączymy się przez backend load balancer
    const response = await axios.get(`${backendUrl}/hello`);
    const data = {
      ...response.data,
      frontend: `${serviceName}:${instanceId}`,
      timestamp: new Date().toISOString()
    };
    
    console.log(`${serviceName}:${instanceId} received response:`, data);
    res.json(data);
  } catch (err) {
    console.error(`${serviceName}:${instanceId} error:`, err.message);
    res.status(500).json({ 
      error: err.toString(),
      frontend: `${serviceName}:${instanceId}`
    });
  }
});

app.listen(port, () => {
  console.log(`${serviceName}:${instanceId} listening on port ${port}`);
});