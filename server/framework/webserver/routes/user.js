
import userControllers from "../../../controllers/userControllers.js";
import userRepoMongo from "../../database/mongoDB/repositories/userRepositoryMongoDb.js";
import userRepository from "../../../application/repositories/userDbRepository.js";
import authServiceInterface from '../../../application/services/authService.js'
import authServiceImpl from '../../services/authService.js'
import verificationImpl from "../../services/verification.js";
import verificationInterface from "../../../application/services/verification.js";
import OtpInterface from '../../../application/repositories/otpRepo.js'
import OtpImpl from '../../database/mongoDB/repositories/otpRepo.js'
import express from 'express'
import authMiddleware from "../middlewares/authMiddleware.js";
import errorHandlingMiddleware from "../middlewares/errorHandlingMiddleware.js";

const router = express.Router()

const controller = userControllers(
    userRepository,
    userRepoMongo,
    authServiceInterface,
    authServiceImpl,
    verificationInterface,
    verificationImpl,
    OtpInterface,
    OtpImpl
);



router.post('/register', controller.addNewUser,errorHandlingMiddleware)
router.get("/:id/verify/:token",controller.verifyMailToken,errorHandlingMiddleware)
router.get("/:id/verifyOtp/:otp",controller.verifyOtp,errorHandlingMiddleware)
router.get('/user/:id',authMiddleware,controller.getUserById,errorHandlingMiddleware)

export default router


