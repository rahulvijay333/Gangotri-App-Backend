// basic url configuration of mongoose  port jwt
import dotenv from 'dotenv';



  dotenv.config();


export default {
    port: process.env.PORT,
    mongo: {
      uri: 'mongodb://0.0.0.0:27017/Gangothri'
    },
    jwtSecret: process.env.JWT_SECRET 
}