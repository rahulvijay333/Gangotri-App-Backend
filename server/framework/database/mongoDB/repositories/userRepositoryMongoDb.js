import UserModel from '../models/user.js'


function omit(obj, ...props) {
    const result = { ...obj };
    props.forEach((prop) => delete result[prop]);
    return result;
}

export default function userRepositoryMongoDB() {

    const addUser = async(userEntity) => {
        const newUser = new UserModel({
            username: userEntity.getUserName(),
            password: userEntity.getPassword(),
            phone:userEntity.getPhone(),
            email: userEntity.getEmail(),
            role: userEntity.getRole(),
            createdAt: new Date()
        });
    const user =   await newUser.save();
    return user
    };


    const findByProperty = (params) =>
        UserModel.find(omit(params, 'page', 'perPage'))
            .skip(params.perPage * params.page - params.perPage)
            .limit(params.perPage);

    const countAll = (params) =>
        UserModel.countDocuments(omit(params, 'page', 'perPage'));

    const findById = (id) => UserModel.findById(id).select('-password');
    const findByIdAndUpdate =(id,field,fieldValue)=>UserModel.findByIdAndUpdate(id, { verified:fieldValue  }, { new: true })


    return {
        addUser,
        findByProperty,
        findById,
        countAll,
        findByIdAndUpdate
    };
}