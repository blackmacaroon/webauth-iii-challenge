const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

module.exports = function generateToken(user) {
      const payload = {
            subject: user.id, // who is the token for
            username: user.username, // what's their name
            // ... any other information you want to send - remember this will be seen on the client side - NEVER store sensitive information in the payload - keep it light to save bandwidth 
      };
      const options = {
            expiresIn: '1d',
            // check the npm docs for jsonwebtokens to see what options are available to send
      };
      return jwt.sign(payload, secrets.jwtSecret, options)
}