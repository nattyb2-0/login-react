const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')


const app = express();







const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log(`this application is up and running on ${port}`)
})
