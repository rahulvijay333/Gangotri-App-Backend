export default function otpRepo(repo){
    const OtpAdd = (userId,Otp)=>repo.OtpAdd(userId,Otp)
    const isValid = (userId,Otp)=>repo.isValid(userId,Otp)
    return{
        OtpAdd,
        isValid
    }
}