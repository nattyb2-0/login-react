//require dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

//instantiate app
const app = express();


//middlewares for application
app.use(morgan('dev'))
app.use(bodyParser.json());

//route handler with middleware for routes
app.use('/users', require('./routes/users.js'))

//port
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log(`this application is up and running on ${port}`)
})
