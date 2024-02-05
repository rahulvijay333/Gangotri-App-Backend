import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  otps: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

otpSchema.statics.checkOtp = async function (userId, otp) {
  const otpDoc = await this.findOne({ userId });
  if (!otpDoc) {
    return false;
  }
  const index = otpDoc.otps.indexOf(otp);
  if (index === -1) {
    return false;
  }
  otpDoc.otps.splice(index, 1);
  await otpDoc.save();
  return true;
};

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });
const Otp = mongoose.model('Otp', otpSchema);

export default Otp
