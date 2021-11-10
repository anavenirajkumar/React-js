import React, { Fragment, useState } from 'react';

let User = () => {
    
    let [auth, setAuth] = useState({
        message : '',
        isLoggedIn : false
    })

    let login = ()=>{
        setAuth({
           message : 'Welcome',
           isLoggedIn : true 
        })
    }

    let logout =() => {
        setAuth({
            message: 'Thank You',
            isLoggedIn : false
        })
    }
    return(
       <Fragment>
              <div className="container mt-5">
                  <div className="row">
                      <div className="col">
                          <div className="card">
                              <div className="card-body">
 
                                 <p className="h3">{auth.message}</p>
                                     {
                                         !auth.isLoggedIn &&  
                                         <button onClick={login} className="btn btn-success btn-sm">Login</button>
                                     }
                                     {
                                         auth.isLoggedIn && 
                                         <button onClick={logout} className="btn btn-secondary btn-sm">LoGout</button>
                                     }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
     
       </Fragment>
    )
}
export default User;