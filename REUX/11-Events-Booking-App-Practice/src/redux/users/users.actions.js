import Axios from "axios";
import { setAuthToken } from "../../util/setAuthToken";
import { setAlert } from "../alert/alert.actions";
import { GET_USER_INFO, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./users.actionTypes";

// Register a User
let registerUser = (user , history) => {    //
    return async(dispatch) => {
        try{
           dispatch ({ type : REGISTER_USER_REQUEST});
           let dataURL =`http://127.0.0.1:5000/users/register`;
           let responce = await Axios.post(dataURL, user);
           dispatch({ type : REGISTER_USER_SUCCESS , payload : responce.data});
           history.push('/users/login');  // Redict to Login Page
        }
        catch(error){
          // console.log(error.response.data.errors); ///
           let errorList = error.response.data.errors;
           await errorList.forEach(alert => dispatch(setAlert(alert.msg, 'danger' )));  ///
          dispatch({ type : REGISTER_USER_FAILURE, payload : error});
        } 
    };
};

// Login a User
let loginUser = (user , history) => {
    return async(dispatch) => {
        try{
           dispatch ({ type : LOGIN_USER_REQUEST});
           let dataURL =`http://127.0.0.1:5000/users/login`;
           let responce = await Axios.post(dataURL, user);
           dispatch({ type : LOGIN_USER_SUCCESS , payload : responce.data});
           dispatch(getUserInfo());  // Fetch the User Information
           history.push('/');
        }
        catch(error){
          dispatch({ type : LOGIN_USER_FAILURE, payload : error});
        } 
    };
};

let getUserInfo = () => {
  return async (dispatch) => {
    if(localStorage.token){
      setAuthToken(localStorage.getItem('token')); ///
    }
    try{
      let responce = await Axios.get('http://127.0.0.1:5000/users/');
      dispatch({type : GET_USER_INFO , payload : responce.data});
    }
    catch (error) {
      console.log(error);
    }
  }
}

let logOut = (history) => {   /// logout problem history

  return async (dispatch) => {
      try {
          dispatch({type : LOGOUT});
          history.push('/');   ///   history
      }
      catch (error) {
          console.log(error);
      }
  };

};

export {loginUser, registerUser, getUserInfo, logOut};