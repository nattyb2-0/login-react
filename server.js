const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')


const app = express();


//middleware
app.use(morgan('dev'))
app.use(bodyParser.json());







const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log(`this application is up and running on ${port}`)
})
