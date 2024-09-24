const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello from the back-end!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
