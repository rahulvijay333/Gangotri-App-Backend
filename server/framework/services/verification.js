import {userVerification} from '../helpers/verificationConfig.js'
import jwt from 'jsonwebtoken';






export default function verification() {

  const generateVeriToken = async(userId)=>{
    const response = await userVerification.generateEMailToken(userId)
    return response

  }
  const generateEmailLink = async function(userId,token){
    const response = await userVerification.generateEmailLink(userId,token)
    return response

  }
  const validateEmailToken = async function(token){
    const response = await userVerification.verifyEmailToken(token)
    return response

  }

  const sendMail = async(email,subject,text)=>{
    try {
      const response = await userVerification.sendEmail(email,subject,text)
      return response
      
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  
  }

  const sendOtp = async(mobileNumber)=>{
    try {
      const response = userVerification.sendUserOtp(mobileNumber)
      return response
    } catch (error) {
      console.error('Error sending OTP:', error);
    }

  }

  // const resendOtp = ()=>{

  // }



  return{
    generateVeriToken,
    generateEmailLink,
    validateEmailToken,
    sendMail,
    sendOtp
  }

}

