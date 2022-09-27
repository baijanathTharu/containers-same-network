const express = require('express');

const PORT = 4444;

const app = express();

app.get('/:name', (req, res) => {
  const name = req.params.name || 'stranger';
  res.json({
    message: `Hello, ${name}`,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
