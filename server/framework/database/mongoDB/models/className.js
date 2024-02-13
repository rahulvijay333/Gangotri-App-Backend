import mongoose from 'mongoose'

const ClassName = new mongoose.Schema({
    className:{
        type:String,
        required:true
    },
    assigned:{
        type:mongoose.Schema.Types.ObjectId
    },
    TotalStudents :{
        type: Number
    }
})


const Classes = mongoose.model('Class', ClassName);
export default Classes