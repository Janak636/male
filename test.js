const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Test server'));
app.listen(8081, '0.0.0.0', () => console.log('Test server running on port 8081'));