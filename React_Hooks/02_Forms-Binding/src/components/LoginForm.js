import React, {useState} from "react";

let LoginForm = () => {
    let [user , setUser] = useState({
        username : '',
        password : ''
    });

   /* let updateInput = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };*/

   // login
    let login= (event) => {
        event.preventDefault();  // Without Refresh Page
        console.log(user);
    };

    return(
        <React.Fragment>
           <pre>{JSON.stringify(user)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={login}>       
                                    <div className="form-group">
                                        <input required           // required Form Input
                                            name="username"
                                            value={user.username}
                                            onChange={(e) => setUser({...user , 'username' : e.target.value})} // Sprad Operator
                                            type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input required               // required Form Input
                                            name="password"
                                            value={user.password}
                                            onChange={(e) => setUser({...user , 'password' : e.target.value})}   // Sprad Operator
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <input type="submit" value="login" className="btn btn-success btn-sm"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default LoginForm;
