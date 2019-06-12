const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
      const token = req.headers.authorization;
      if(token) {
            jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
                  if(err) {
                        // invalid token
                        res.status(401).json({ message: 'Invalid Token'});
                  } else {
                        // valid token
                        req.user = { departments: decodeToken.departments, username: decodeToken.username };
                        next();
                  }
            })
      } else {
            res.status(400).json({ message: 'Sorry, a token is required for access to this.'})
      }
};