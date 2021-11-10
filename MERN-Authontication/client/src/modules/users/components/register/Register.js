import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"; /////
import {useDispatch} from "react-redux";          //////
import ImageOne from "../../../../assets/img/brand.PNG";
import {registerUser} from "../../../../redux/users/users.actions";  //////

let Register = () => {
    
    let dispatch = useDispatch();         /////
    let history = useHistory();          /////
   
    let [user , setUser] = useState({
      name: '',
      email: '',
      password : ''
    });

    let [userError , setUserError] = useState({
      nameError : null,
      emailError : null,
      passwordError : null
  });

  // handle username
  let handleUsername = (e) => {
      setUser({...user, name : e.target.value});
      let regExp = /^[a-zA-Z0-9]{4,10}$/;
      if(regExp.test(e.target.value)){
          setUserError({...userError , nameError : ''});
      }
      else{
          setUserError({...userError , nameError : 'Enter a proper Name'});
      }
  };

  // handle Email
  let handleEmail = (e) => {
      setUser({...user, email : e.target.value});
      let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
      if(regExp.test(e.target.value)){
          setUserError({...userError , emailError : ''});
      }
      else{
          setUserError({...userError , emailError : 'Enter a proper Email'});
      }
  };

  // handle password
  let handlePassword = (e) => {
      setUser({...user, password : e.target.value});
      let regExp = /^[A-Za-z]\w{7,14}$/;
      if(regExp.test(e.target.value)){
          setUserError({...userError , passwordError : ''});
      }
      else{
          setUserError({...userError , passwordError : 'Enter a proper Password'});
      }
  };

  // submitRegister
   let submitRegister = (e) => {
      e.preventDefault();
      // console.log(user)
      dispatch(registerUser(user , history));/////
   }
 
    return(
        <React.Fragment>
        {/* <section className="p-3 bg-brains">
          <div className="container ">
            <div className="row animated flipInY">
              <div className="col">
                <p className="h3">
                  <i className="fa fa-user-cog" /> Register Here
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="mt-3">
          <div className="container">
            <div className="row">
              {/* <pre>{JSON.stringify(user)}</pre>
              <pre>{JSON.stringify(userError)}</pre> */}
              <div className="col-md-4 m-auto">
                <div className="card animated jello"  style={{color: 'white'}}>
                  <div className="card-header" style={{backgroundColor: 'teal'}}>
                    <p className="h4">Register Here</p>
                  </div>
                  <div className="card-body">
                    <form onSubmit={submitRegister}>
                    <div className="form-group">
                        <input
                        required
                          name="name"
                          value={user.name}
                          onChange={handleUsername}
                          type="text"
                          className={`form-control ${userError.nameError ? 'is-invalid' : ''}`}
                          placeholder="Name"
                        />
                        {
                          userError.nameError ? <small className="text-danger">{userError.nameError}</small> : null
                        }
                      </div>
                      <div className="form-group">
                        <input
                        required
                          name="email"
                          value={user.email}
                          onChange={handleEmail}
                          type="email"
                          className={`form-control ${userError.emailError ? 'is-invalid' : ''}`}
                          placeholder="Email"
                        />
                        {
                          userError.emailError ? <small className="text-danger">{userError.emailError}</small> : null
                        }
                      </div>
                      <div className="form-group">
                        <input
                        required
                          name="password"
                          value={user.password}
                          onChange={handlePassword}
                          type="password"
                          className={`form-control ${userError.passwordError ? 'is-invalid' : ''}`}
                          placeholder="Password"
                        />
                         {
                          userError.passwordError ? <small className="text-danger">{userError.passwordError}</small> : null
                        }
                      </div>
                      <input
                        type="submit"
                        className="btn btn-sm" style={{backgroundColor: 'teal'}}
                        value="Register"
                      />
                    </form>
                    <small className="font-weight-bold" style={{color: 'black'}}>
                     Have an account ?
                      <Link to="/users/login"> Login</Link>
                    </small>
                  </div>
                  <div className="card-footer text-center" style={{backgroundColor: 'teal'}}>
                    <img src={ImageOne} alt="" width="180" height="35" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
};

export default Register;