import addUser from "../application/useCases/user/add.js";
import verifyEmailToken from "../application/useCases/user/verifyEmail.js";
import verifyUserOtp from "../application/useCases/user/verifyOtp.js";
import findById from "../application/useCases/user/findById.js";

 



export default function userControllers(userDbRepository, userRepoMongo, authServiceInterface,
    authServiceImpl,verificationInterface,
    verificationImpl,OtpInterface,OtpImpl) {

    const dbRepository = userDbRepository(userRepoMongo());
    const authService = authServiceInterface(authServiceImpl());
    const verifyService = verificationInterface(verificationImpl())
    const otpRepository = OtpInterface(OtpImpl())
     

    const addNewUser = (req, res, next) => {
        const { username, password, phone, email, role, createdAt } = req.body;
        addUser(
            username,
            password,
            phone,
            email,
            role,
            createdAt,
            dbRepository,
            authService,
            verifyService,
            otpRepository
        )
            .then((user) => res.status(201).json(user))
            .catch((error) => next(error));
    };

    const verifyMailToken = (req,res,next)=>{
        const{id,token} = req.params
        verifyEmailToken( id,token,dbRepository,
            verifyService)
            .then((response)=>res.status(200).json(response))
            .catch((error)=>next(error))

    }

    const verifyOtp = (req,res,next)=>{
        const {id,otp} = req.params;
        verifyUserOtp(id,otp,dbRepository,otpRepository)
        .then((response)=>res.status(200).json({response}))
        .catch((error)=>next(error))

    }

    const getUserById= (req,res,next)=>{
        findById(req.params.id, dbRepository)
      .then((user) => res.json(user))
      .catch((error) => next(error)); 
    }

    return {
        addNewUser,
        verifyMailToken,
        verifyOtp,
        getUserById
    };

}