const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use(session(sessionConfig));

// sanity check route 
server.get('/', (req, res) => {
      res.send(`<h2>nailed it!</h2>`)
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: "i cant. even."})
      })
});

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;