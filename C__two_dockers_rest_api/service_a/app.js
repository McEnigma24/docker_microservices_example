const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.json({ message: "Hello from Service A!" });
});

app.listen(port, () => {
  console.log(`Service A listening on port ${port}`);
});
