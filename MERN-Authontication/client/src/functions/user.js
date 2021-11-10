import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://127.0.0.1:5000';

export const getUsers = async (id) => {
    id = id || '/users';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {  // Get Data on Form and Update Form
    return await axios.put(`${usersUrl}/${id}`, user)
}