import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique:true,
    required:true
  },
  role: {
    type: String,
    enum: ['user', 'admin','teacher'],
    default: 'user',
  },
  verified: {
    type: Boolean,
    required: true,
    default: false
},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
