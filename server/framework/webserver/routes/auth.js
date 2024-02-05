import authController from '../../../controllers/authController.js'
import userDbRepository from '../../../application/repositories/userDbRepository.js'
import userDbRepositoryMongoDB from '../../database/mongoDB/repositories/userRepositoryMongoDb.js'
import authServiceInterface from '../../../application/services/authService.js'
import authServiceImpl from '../../services/authService.js'
import express from 'express';
import errorHandlingMiddleware from '../middlewares/errorHandlingMiddleware.js'

const router = express.Router();

    const controller = authController(
      userDbRepository,
      userDbRepositoryMongoDB,
      authServiceInterface,
      authServiceImpl
    );
  
    // POST enpdpoints
    router.post('/login',controller.loginUser,errorHandlingMiddleware)
  
   export  default router;
  