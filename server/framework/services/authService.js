import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import config from '../../config/config.js';

export default function authService() {
    
  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const compare = (password, hashedPassword) =>{
    return bcrypt.compareSync(password, hashedPassword);


  }

  const verify = (token) =>{
    return jwt.verify(token, config.jwtSecret);

  }  

  const generateToken = (payload) =>{
    return jwt.sign({ id: payload }, config.jwtSecret, {
      expiresIn: 360000
    });

  }
    

  return {
    encryptPassword,
    compare,
    verify,
    generateToken
  };
}