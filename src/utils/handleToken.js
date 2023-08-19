const jwt = require('jsonwebtoken');

// Middleware to validate token
const authenticateToken = (req, res, next) => {
  // get token to the header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  // verify and decode token
  jwt.verify(token, 'tu_secreto_secreto', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    // if token is Ok, save the user from the request to use then
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;