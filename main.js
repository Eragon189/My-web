const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

app.post('/api/myendpoint', (req, res) => {
    const { name, age } = req.body;
    console.log(`Received: Name - ${name}, Age - ${age}`);
    res.status(200).json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
