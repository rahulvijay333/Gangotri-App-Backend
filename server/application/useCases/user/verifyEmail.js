export default async function verifyEmailToken( id,token,userRepository,
    verifyService){

        try {

            const user = userRepository.findById(id)
            if(!user)throw new Error('Invalid user request!')
            const tokenVerification = await verifyService.validateEmailToken(token)
            if(!tokenVerification)throw new Error('Invalid Token!')
            console.log("user verification user id ,",tokenVerification)
            const userId = tokenVerification.ID
            const  userData = await userRepository.findById(userId)
            if(!userData) throw new Error('User not authenticated!')
            //please check here the way the update data is passed
            const updateUser = await userRepository.findByIdAndUpdate(id,'verified',true)
            return updateUser
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }




}