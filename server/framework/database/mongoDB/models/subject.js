import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true,
    },
    totalMarks: {
        type: Number,
    },
    assignedClasses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class', 
    }],
});

const Subject = mongoose.model('Subject', SubjectSchema);
export default Subject;
