const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');
const generateToken = require('./generateToken.js');

// endpoints /api/auth
router.post('/register', (req, res) => {
      let user = req.body;
      // hash the password
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
});

router.post('/login', (req, res) => {
      let { username, password } = req.body;

      Users.findBy({ username })
            .first()
            .then(user => {
                  if(user && bcrypt.compareSync(password, user.password)) {
                        // generate a token
                        const token = generateToken(user)
                        res.status(200).json({
                              message: `Hello ${user.username}.`,
                              // add the newly generated token to the servers response
                              token
                        });
                  } else {
                        res.status(401).json({ message: 'invalid login credentials'})
                  }
            })
            .catch(err => {
                  console.log('login', err)
                  res.status(500).json({ message: 'log in failure' })
            })
});

// router.get('/logout', (req, res) => {
     
// })



module.exports = router;