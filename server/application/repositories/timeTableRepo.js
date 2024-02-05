export default function timeTableRepo(tableRepo){
    const findByProperty = (params)=>tableRepo.findByProperty(params);
    const addTable = (table)=>tableRepo.addTable(table)
    const updateTableById = (id,params)=>tableRepo.findByIdAndUpdate(id,params)
    const deleteById =(id)=>tableRepo.findByIdandDelete(id) 

    return{
        findByProperty,
        addTable,
        updateTableById,
        deleteById
    }
}