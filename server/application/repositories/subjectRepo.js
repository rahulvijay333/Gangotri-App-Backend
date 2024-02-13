export default function subjectRepo(repository){
    const addSubject = (classEntity)=>repository.addSubject(classEntity)
    const findByProperty = (param)=>repository.findByProperty(param)
    return {
        addSubject,
        findByProperty
    }

}