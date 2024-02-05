export default function classRepo(repository){
    const addClass = (classEntity)=>repository.addClass(classEntity)
    const findByProperty = (param)=>repository.findByProperty(param)
    return {
        addClass,
        findByProperty
    }

}