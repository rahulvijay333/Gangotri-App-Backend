import subjectModel from "../models/subject.js";

function omit(obj, ...props) {
    const result = { ...obj };
    props.forEach((prop) => delete result[prop]);
    return result;
}


export default function subjectRepositoryMongo(){
    const addSubject= async(subjectEntity)=>{
        const newSubject = new subjectModel({
            className:subjectEntity.className(),
            subjectName:subjectEntity.subjectName()
             
        })

        const SubjectNew =  await newSubject.save()
        return SubjectNew
    }
    const findByProperty = async(params) =>
    await subjectModel.find(omit(params, 'page', 'perPage'))
            .skip(params.perPage * params.page - params.perPage)
            .limit(params.perPage);

    return{
        addSubject,
        findByProperty}
}