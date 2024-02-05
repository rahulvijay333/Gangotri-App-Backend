
import timeTableEntity from '../../../entities/timeTable'

export default async function addTimeTable(classId,week,tableRepo){
   


    const newTimeTABLE = new timeTableEntity(
        classId,
        week
    )

    return await tableRepo.findByProperty(classId)
                    .then((response)=>{
                        if(response.length)throw new Error('Class already has an time table, Please try editing it!')
                        if(!week.length || week.length==0)throw new Error('No table data!')
                        return tableRepo.addTable(newTimeTABLE)
                       
                    })
                    .catch((error)=>{
                        console.log(error)
                        //heloo
                        return error

                    } )
                

}