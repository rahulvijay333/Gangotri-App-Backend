import TimeTableSchema from '../models/timeTable'
updateTableById,
deleteById

export default function timeTableRepo(){


    const findByProperty = async(prop)=>await TimeTableSchema.find(prop)
    const addTable = async(classEntity)=>{
        const newTimeTable = new TimeTableSchema({
            classId:classEntity.getClassId(),
            week:classEntity.getWeek()
        })

        const table = await newTimeTable.save()
        return table

    }
    const updateTableById = async(id,prop)=>{
        const updateObject = { [prop]: prop };
        await TimeTableSchema.findByIdAndUpdate(id,updateObject,{new:true})
    }

    const deleteById = async (id)=>await TimeTableSchema.findByIdAndDelete(id)

    return {
        findByProperty,
        addTable,
        updateTableById,
        deleteById

    }
    
}