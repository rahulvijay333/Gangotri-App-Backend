import user from '../../../entities/users.js'

export default function addUser(
            username,
            password,
            phone,
            email,
            role,
            createdAt,
            userRepository,
            authService,
            verifyService,
            otpRepository


) {
    if (!username || !password || !email) {
        throw new Error('username, password and email fields cannot be empty');
    }

    // Heloooooooooooooooooooooo
    console.log("simple herloo")

    const newUser = new user(
        username,
        authService.encryptPassword(password),
        email,
        phone,
        role,
        createdAt
    );


    return userRepository
    .findByProperty({ email }) // Search by email
    .then((userWithEmail) => {
        if (userWithEmail.length) {
            throw new Error(`User with email: ${email} already exists`);
        }
        return userRepository.findByProperty({ username }); // Search by username
    })
    .then((userWithUsername) => {
        if (userWithUsername.length) {
            throw new Error(`User with username: ${username} already exists`);
        }
        return userRepository.findByProperty({ phone }); // Search by phone
    })
    .then(async(userWithPhone)=>{
        if(userWithPhone.length){
            throw new Error (`User with phone: ${phone} already exists`);
        }

        const response = await userRepository.add(newUser);
        const UserData = await userRepository.findByProperty({ email })
        if(!UserData) throw new Error('User not created')
        const userId = UserData[0]._id
        const generateEmailToken = await verifyService.generateVeriToken(userId)
        const generateEmailLink = await verifyService.generateEmailLink(userId,generateEmailToken)
        const subject = "Hey there"
       const emailServ = await verifyService.sendMail(email,subject,generateEmailLink)
       const otp =  await verifyService.sendOtp(phone)
    //    console.log(otp)
       
       if(otp.response.status!==200) throw new Error('Otp not generated, please resend Otp!')
       await otpRepository.OtpAdd(userId,otp.otp)
       const msg = `Email sent to ${emailServ?.envelope?.to} and Otp ${otp.response.data.message}, it expires in 5 minutes`
       
        
               /*==================================>>>><<<<<<==============================*/
               /*Use this below code once everything handled ie Otp and Email, such that */
//                Promise.all([generateEmailToken, generateEmailLink, emailServ, otp])
//   .then(() => {
//     // Do something after all the promises have resolved
//   })
//   .catch((err) => {
//     // Handle errors here
//   });
                
        return {response,msg}
    })



}