import React, { Fragment, useState } from 'react';

let ChangeUserName = () =>{
    let [username, SetUsername] = useState('');
    return(
        <Fragment>
                <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Change Username</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input
                                         value={username}
                                         onChange={(event=>{SetUsername(event.target.value)})}
                                         type="text" className="form-control" placeholder="username"/>
                                    </div>
                                      <p className="h3">{username}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ChangeUserName;