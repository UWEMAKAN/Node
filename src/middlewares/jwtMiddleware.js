import jwt from 'jsonwebtoken';

import jwtSecret from '../config/jwtConfig';

const authentication = () => {
  const createToken = (username) => {
    const token = jwt.sign({ username }, jwtSecret);
    return { token };
  };

  const verifyToken = (token) => {
    const data = jwt.verify(token, jwtSecret);
    return { data };
  };

  return {
    createToken,
    verifyToken
  };
};

export default authentication;
