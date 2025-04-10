const express = require('express');
const app = express();
const port = 3000;

// Get hostname for identifying which container responds
const os = require('os');
const hostname = os.hostname();

// Simple route that returns container ID and welcome message
app.get('/', (req, res) => {
  res.json({
    message: 'Division API is running!',
    container: hostname
  });
});

app.get('/divide/:value', (req, res) => {
    const value = parseFloat(req.params.value);

    // The constant to divide - we'll use 42
    const constant = 42;

    // Add error handling for division by zero
    if (value === 0) {
        console.log(`Container ${hostname}: Cannot divide ${constant} by zero`);
        return res.status(400).json({
        error: 'Cannot divide by zero',
        container: hostname
        });
    }

    // Perform division
    const result = constant / value;

    // Log the operation
    console.log(`Container ${hostname}: ${constant} / ${value} = ${result}`);

    // Return the result
    res.json({
        operation: `${constant} / ${value}`,
        result: result,
        container: hostname
    });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Container ${hostname}: Division API listening on port ${port}`);
});