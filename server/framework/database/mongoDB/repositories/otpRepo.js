import OtpModel from '../models/otp.js'



export default function addUserOtp(){

    const OtpAdd =async (userId,Otp)=>{
        try {
            const otp = new OtpModel({ userId:userId, otps: [Otp] });

            await otp.save();

        } catch (error) {
    console.log(error)            
        }
    }
    const isValid = async(userId,otp)=>{
   
            const isValid = await OtpModel.checkOtp(userId, otp);
        if (!isValid)throw new Error("Invalid OTP")
             return isValid 
    }
    

    return {
        OtpAdd,
        isValid
    }


}