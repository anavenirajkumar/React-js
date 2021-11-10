import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';

let UserList = () => {
    let [users, setUsers] = useState([]);   // Other Api Objects Comes to Array of useStates()

    useEffect(()=>{
        console.log(`Fetching Data Grom Server`);   /////////////
      Axios.get(`https://jsonplaceholder.typicode.com/users`).then((responce)=>{
            setUsers(
                responce.data
            )
      }).catch((err)=>{
           console.error(err)
      });
    }, []);  //  To Stop Automatic Printing `Fetching Data Grom Server` in Console.log
    return(
        <Fragment>
            {/* <pre>{JSON.stringify(users)}</pre> */}
                <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Users Information</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis deserunt dicta dolore hic ipsa iure laborum maiores mollitia necessitatibus nobis, odio omnis quae quas quasi quisquam reiciendis sapiente temporibus?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-primary table-hover text-center table-striped">
                            <thead className="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                                  {
                                     users.length > 0 ? 
                                    
                                      <Fragment>
                                       {
                                           users.map((user)=>{
                                               return(
                                                  <tr key={user.id}>
                                                      <td>{user.id}</td>
                                                      <td>{user.name}</td>
                                                      <td>{user.username}</td>
                                                      <td>{user.email}</td>
                                                      <td>{user.address.city}</td>
                                                  </tr>
                                               )
                                           })
                                       }
                                      </Fragment> : null

                                  }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default UserList;