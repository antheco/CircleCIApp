console.log('Server-side code running');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// serve files from the public directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

