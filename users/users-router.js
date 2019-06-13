const router = require("express").Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkDept = require('../auth/checkDepartment.js')

router.get('/', restricted, checkDept('defense'), (req, res) => {
      Users.find()
            .then(users => {
                  res.json({users, user: req.user});
            })
            .catch( err => res.send(err))
});

module.exports = router;