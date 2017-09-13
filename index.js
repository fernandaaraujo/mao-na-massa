const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.listen(50000, () => console.log('Server running on port 50000'))
