// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define the port
const PORT = 3000;
// 4. Define the route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Path: index.js
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define the port
const PORT = 3000;
// 4. Define the route
app.get('/', (req, res) => {
  res.send('Home page');
});
// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Path: posts.js
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define the port
const PORT = 3000;
// 4. Define the route
app.get('/posts', (req, res) => {
  res.send('Posts page');
});
// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Path: server.js
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define the port
const PORT = 3000;
// 4. Define the route
app.get('/', (req, res) => {
  res.send('Home page');
});
app.get('/posts', (req, res) => {
  res.send('Posts page');
});
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Path: server.js
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Define the port
const PORT = 3000;
// 4. Define