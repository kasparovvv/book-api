
const jwt = require('jsonwebtoken');
const { StatusCode } = require('status-code-enum')



const authenticateJWT = (req, res, next) => {
 
    const token = req.headers?.authorization?.split("Bearer ")[1];

    if (!token) {
        return res.status(StatusCode.ClientErrorUnauthorized).json({ message: 'No token provided. Access denied.' });
    }
    
  try {

    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

    req.user = decoded;

    next();

  } catch (error) {
    
    console.error(error);
    return res.status(StatusCode.ClientErrorUnauthorized).json({ message: 'Invalid token. Access denied.' });

  }
};

module.exports = authenticateJWT;
