import React, {useState} from "react";

let ChangeUsername = () => {
    let [username , setUsername] = useState('');

    /*let updateInput = (e) => {
        setUsername(e.target.value);
    };*/

    return(
        <React.Fragment>
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
                                            onChange={(e) =>{setUsername(e.target.value)}}
                                            type="text" className="form-control" placeholder="username"/>
                                    </div>
                                    <p className="h3">{username}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ChangeUsername;
