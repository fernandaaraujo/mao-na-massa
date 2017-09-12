const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('./src/index.html')
})

app.listen(50000, () => console.log('Server running on port 3000'))
