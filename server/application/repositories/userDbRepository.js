export default function userRepository(repository) {

    const findByProperty = (params) => repository.findByProperty(params);
    const findByIdAndUpdate = (id,field,fieldValue)=>repository.findByIdAndUpdate(id,field,fieldValue)
    const countAll = (params) => repository.countAll(params);
    const findById = (id) => repository.findById(id);
    const add = (user) => repository.addUser(user);
    const deleteById = (id) => repository.deleteById(id);
  
    return {
      findByProperty,
      findByIdAndUpdate,
      countAll,
      findById,
      add,
      deleteById
    };
  }