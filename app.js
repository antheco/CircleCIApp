console.log('Server-side code running');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// serve files from the public directory
//app.use(express.static('public'));
app.use('/public', express.static('public'));
app.use('/nodes', express.static('node_modules'));
console.log(__dirname);

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  module.exports = app;