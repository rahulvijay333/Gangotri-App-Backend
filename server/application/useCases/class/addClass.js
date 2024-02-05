import classes from '../../../entities/class.js'


export default function addClass(className,assigned,classRepository){
    if (!className) {
        throw new Error('Class name cannot be Empty');
    }

    const newClass = new classes(
        className,assigned
    )

    return classRepository.findByProperty({className})
            .then((className)=>{
                if(className.length)throw new Error("Class Already Available!")
                return classRepository.addClass(newClass)
            })

}