const Userslist = require("../models/Userslist");


// Save data of the user in database
exports.addUser = async (request, response) => {
    console.log(request.body)
    const user = request.body;
    // console.log("addUser")

    const newUser = new Userslist(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


// Get all users
exports.getUsers = async (request, response) => {

    try{
        const users = await Userslist.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Get a user by id
exports.getUserById = async (request, response) => {
    try{
        const user = await Userslist.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
exports.editUser = async (request, response) => {
    let user = await Userslist.findById(request.params.id);
    user = request.body;

    const editUser = new Userslist(user);
    try{
        await Userslist.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
exports.deleteUser = async (request, response) => {
    try{
        await Userslist.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}