const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwtCheck = require('../middlewares/jwtcheck');
const Users = require('../user/users-model.js');

// for endpoints beginning with /api/auth
router.get('/', jwtCheck, (req, res) => {
  Users.findByDepartment(req.decodedToken.department)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/all', jwtCheck, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});



module.exports = router;