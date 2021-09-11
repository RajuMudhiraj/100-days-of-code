const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})


let port = process.env.PORT;
if (port == null || port == ""){
    port = 3000;
}
app.listen(port, () => {
    console.log('Server is listening at https://localhost:'+ port)
})

