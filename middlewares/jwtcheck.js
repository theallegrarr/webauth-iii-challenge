const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(
      token,
      'secret key',
      (err, decodedToken) => {
        if(err) {
          res.status(401).json({ message: `You Shall Not Pass!`});
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      }
    )
  } else {
    res.status(401).json({ message: `Missing credentials`});
  }
}