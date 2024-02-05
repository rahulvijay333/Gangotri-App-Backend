import classModel from '../models/className.js'

function omit(obj, ...props) {
    const result = { ...obj };
    props.forEach((prop) => delete result[prop]);
    return result;
}


export default function classRepositoryMongo(){
    const addClass= async(classEntity)=>{
        const newClass = new classModel({
            className:classEntity.className(),
            assigned:classEntity.assigned()

        })

        const ClassNew =  await newClass.save()
        return ClassNew
    }
    const findByProperty = async(params) =>
    await classModel.find(omit(params, 'page', 'perPage'))
            .skip(params.perPage * params.page - params.perPage)
            .limit(params.perPage);

    return{
        addClass,
        findByProperty    }
}