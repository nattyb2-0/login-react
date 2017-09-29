//functions to be used as middlewares
 function signUp(req,res,next){
    console.log('this is the signup function')
  }

  function signIn(req,res,next){
    console.log('this is the signIn function')
  }

   function secret(req,res,next){
    console.log('this is the secret function')
  }

//export functions to be used as modules for middleware
module.exports = {signIn,signUp,secret}
