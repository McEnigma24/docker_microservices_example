const express = require('express');
const app = express();
const port = 3000;

// Pobieramy nazwę serwisu z zmiennej środowiskowej lub używamy domyślnej
const serviceName = process.env.SERVICE_NAME || 'backend';
const instanceId = Math.floor(Math.random() * 10000); // Unikalny identyfikator instancji

app.get('/hello', (req, res) => {
  console.log(`Request received on ${serviceName}:${instanceId}`);
  res.json({ 
    message: "Hello from Service A!",
    backend: `${serviceName}:${instanceId}`,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`${serviceName}:${instanceId} listening on port ${port}`);
});