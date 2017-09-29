const express = require('express');
const router = require('express-promise-router')();
const userModel = require('../models/users.js');


router.route('/signup')
  .post(userModel.signUp)

router.route('/signin')
  .post(userModel.signIn)

router.route('/secret')
  .get(userModel.secret)


