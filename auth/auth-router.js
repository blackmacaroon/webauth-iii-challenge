const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../config/secrets.js');

// endpoints /api/auth
router.post('/register', (req, res) => {
      let user = req.body;
      const hash = bcrypt.hashSync(user.password, 12); // 2^n
      user.password = hash;

      Users.add(user)
            .then(newUser => {
                  res.status(201).json(newUser);
            })
            .catch(err => {
                  console.log('register', err)
                  res.status(500).json({ message: 'registration failure' })
            })
})





module.exports = router;