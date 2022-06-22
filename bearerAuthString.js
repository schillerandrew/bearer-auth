'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.API_SECRET || 'ThisIsMySecret';

let user = {
  username: 'tester',
  password: 'pass123'
};

function generateToken(userToHash) {
  return jwt.sign(userToHash, SECRET);
}

let token = generateToken(user);
console.log('AuthString: ', `Bearer ${token}`);