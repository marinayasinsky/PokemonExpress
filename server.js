const express = require('express');
const app = express();


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
