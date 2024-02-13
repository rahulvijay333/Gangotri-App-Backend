import addSubject from "../application/useCases/subject/addSubject.js";


export default function subjectController(subjectRepoInterface,subjectRepoImpl){
    const subjectRepository = subjectRepoInterface(subjectRepoImpl())

    const addNewSubject = async(req,res,next)=>{
        const{className,subjectName} = req.body

        addSubject(subjectName,className,subjectRepository)
        .then((cls)=>res.status(200).json(cls))
        .catch((error)=>next(error))

    }
     


    return{
        addNewSubject
    }



}