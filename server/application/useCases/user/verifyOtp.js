export default async function verifyUserOtp(userId,otp,dbRepository,otpRepository){
    try {
        const user = await dbRepository.findById(userId)
        if(!user)throw new Error("Invalid User")
        const validatingOtp = await otpRepository.isValid(userId,otp)
        if(!validatingOtp)throw new Error("Invalid Otp")
        const updateUser = await dbRepository.findByIdAndUpdate(userId,'verified',true)

        return {updateUser,validatingOtp}

    } catch (error) {
        console.log(error)
    }

}