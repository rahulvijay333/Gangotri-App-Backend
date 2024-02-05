
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken';
import axios from 'axios';
// import { google } from 'googleapis';
// const OAuth2 = google.auth.OAuth2;


//Creating a secured Email service using OAuth2, Please get the credentials from the GCP for this secured setup then follow the commented code below
/*========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=======================================
/*
const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });
  
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject();
        }
        resolve(token);
      });
    });
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });
  
    return transporter;
  };


  const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  };

  function sendingMail(mailContent){
    sendEmail({
        subject: "Test",
        text: "I am sending an email from nodemailer!",
        to: "put_email_of_the_recipient",
        from: process.env.EMAIL
      });

  }
*/

  //=================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<============================================


  export const userVerification ={

        generateEMailToken :async function(userId){
            try {
                const verificationToken = jwt.sign(
                  { ID: userId },
                  process.env.USER_VERIFICATION_TOKEN_SECRET,
                  { expiresIn: "7d" }
              );
              return verificationToken;
                
              } catch (error) {
                console.log(error)
              }

        },
        generateEmailLink:async function(userId,token){
            try {
                const url = `${process.env.BASE_URL}api/${userId}/verify/${token}`;
                return url
                
            } catch (error) {
                console.log(error)
            }

        },
        verifyEmailToken:async function(token){
            try {
                let payload = jwt.verify(
                   token,
                   process.env.USER_VERIFICATION_TOKEN_SECRET
                );
                return payload
            } catch (err) {
                return res.status(500).send(err);
            }

        },

       sendEmail : async function (email,subject,text){
          try {

      const htmlcontent = `<html>
      <head>
          <title>Invitation</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                h1 {
                  text-align: center;
                  font-size: 36px;
                  color: #4CAF50;
                  text-shadow: 2px 2px #FFA500;
              }
          </style>
      </head>
      <body>
      <div class="container">
      <h1>Your link is here!</h1>
      <a href="${text}">click to verify</a>
      </div>
      </body>
      </html>`;

      
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        service:'gmail',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        }
      });
        const info = await transporter.sendMail({
          from: `Gangithri${process.env.EMAIL_USER}>`, // sender address
          to: email, // list of receivers
          subject: subject?subject:"Hello ✔ welcome to *****", // Subject line
          text: text?text:"Hello !!", 
          html:htmlcontent
          
        });
        // console.log(info)
              
        // console.log("Message sent: %s", info.messageId);
      
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return info

        
    } catch (error) {
        console.log(error,"email not sent")
        return error
    }

},


sendUserOtp : async function (mobileNumber){
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
          params: {
            authorization: process.env.FAST2SMS_API_KEY,
            route: 'otp',
            variables_values: otp,
            flash:0,
            numbers: mobileNumber
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return {response,otp}
        
    } catch (error) {
        console.log(error)
        return error
    }
  
}



}





