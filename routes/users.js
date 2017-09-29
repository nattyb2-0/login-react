//require depencies
const express = require('express');
const router = require('express-promise-router')();
//require the module that serves as middleware
const {signUp,signIn,secret} = require('../models/users.js');

//set up routes
router.route('/signup')
  .post(signUp)

router.route('/signin')
  .post(signIn)

router.route('/secret')
  .get(secret)


//export the router to be used as middleware in application
module.exports = router;


