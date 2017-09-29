//require connection to mydb
const db = require('../db/db.js');



//functions to be used as middlewares
 function signUp(req,res,next){
    console.log('this is the signup function')
    console.log(db)
    console.log(req.body)
    db.none(`
  INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`,
  [req.body.username, req.body.email, req.body.password])
  .then((users) => {
    res.users = users;
    next();
  })
  .catch(error => next(error));
  }

  function signIn(req,res,next){
    console.log('this is the signIn function')
  }

   function secret(req,res,next){
    console.log('this is the secret function')
  }

//export functions to be used as modules for middleware
module.exports = {signIn,signUp,secret}
