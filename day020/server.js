
const express = require('express');
const app = express();


// addingg cors middleware to enable cross origin resource sharing
app.use(cors())


// simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Node.js and Express.js" });
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
