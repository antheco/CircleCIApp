console.log('Server-side code running');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

router.post('//', function(req, res, next) {

  if(req.body.hasOwnProperty("butt1")){
     console.log("butt1 clicked");
  }else{
     console.log("butt2 clicked");
  }
  res.render('/', { title: 'post' });
});

// serve files from the public directory
//app.use(express.static('public'));
app.use('/public', express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  module.exports = app;