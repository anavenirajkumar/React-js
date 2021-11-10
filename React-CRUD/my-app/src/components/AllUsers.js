import react, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../functions/user';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (

        <table className="table">
  <thead style={{backgroundColor: '#3F51B5', color: 'white'}}>
    <tr>
      <th scope="col">S NO</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Role</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user) => (
    <tr key={user.id}>
      <th scope="row">{user._id}</th>
      <td>{user.name}</td>
      <td>{user.lname}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.role}</td>

      <td>
            <Link to={`/edit/${user._id}`}>
                    <button className="btn  btn-sm" style={{backgroundColor:'#3F51B5', color: 'white'}} >Edit</button>
            </Link>
      <button className="btn btn-danger btn-sm" onClick={() => deleteUserData(user._id)}>Delete</button>
      </td>
    </tr>
  ))}
  </tbody>
</table>
    )
}

export default AllUsers;