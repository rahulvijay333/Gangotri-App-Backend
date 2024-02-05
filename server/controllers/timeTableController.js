import addTimeTable from "../application/useCases/timeTable/addTimeTable"


export default function tableController(timeTableRepoInt,timeTableRepoImpl){

    const tableRepo = timeTableRepoInt(timeTableRepoImpl())

    const addTable = (req,res,next)=>{
        const{classId,week} = req.body
        addTimeTable(classId,week,tableRepo)
        .then((response)=>res.satatus(200).json(response))
        .catch((error)=>next(error))

    }


    return {
        addTable
    }

    

}