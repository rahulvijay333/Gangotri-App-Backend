import subjects from '../../../entities/subject.js'

export default function addSubject(subjectName,className,subjectRepository){
    if (!subjectName) {
        throw new Error('Class name cannot be Empty');
    }

    const newSubject = new subjects(
        subjectName,className
    )

    return subjectRepository.findByProperty({subjectName})
            .then((subjectName)=>{
                if(subjectName.length)throw new Error("Class Already Available!")
                return subjectRepository.addSubject(newSubject)
            })

}