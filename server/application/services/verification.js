export default function verification(verificationService){

    const sendMail = (email,subject,text)=>verificationService.sendMail(email,subject,text)
    const sendOtp = (mobileNumber)=>verificationService.sendOtp(mobileNumber)
    const validateEmailToken = (token) => verificationService.validateEmailToken(token);
    const generateEmailLink = (userId,token)=>verificationService.generateEmailLink(userId,token)
  
    const generateVeriToken = (payload) => verificationService.generateVeriToken(payload);

    return {sendMail,sendOtp,validateEmailToken,generateVeriToken,generateEmailLink}

}