const express = require('express');
const path = require('path');

const app = express();
const port = 5500; // You can use any port you prefer

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for rendering the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/images', (req, res) => {
  res.sendFile(path.join(__dirname, 'images.html'));
});

app.get('/video', (req, res) => {
  res.sendFile(path.join(__dirname, 'video.html'));
});

app.get('/megavision', (req, res) => {
  res.sendFile(path.join(__dirname, 'megavision.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
