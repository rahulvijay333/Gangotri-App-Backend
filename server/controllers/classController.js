
import addClass from "../application/useCases/class/addClass.js";


export default function classController(classRepoInterface,classRepoImpl){
    const classRepository = classRepoInterface(classRepoImpl())

    const addNewClass = async(req,res,next)=>{
        const{className,assigned} = req.body

        addClass(className,assigned,classRepository)
        .then((cls)=>res.status(200).json(cls))
        .catch((error)=>next(error))

    }
     


    return{
        addNewClass
    }



}