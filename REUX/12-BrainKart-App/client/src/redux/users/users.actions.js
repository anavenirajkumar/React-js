// Register User
import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE, LOGOUT_USER, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_SUCCESS, UPDATE_ADDRESS_FAILURE} from "../../redux/users/users.actionTypes";
import Axios from "axios";
import { setAlert } from "../layout/alert.actions";
import { setAuthToken } from "../../util/setAuthToken";
let registerUser = (user, history) => {
   return async (dispatch) => {
       try{
           dispatch({type : REGISTER_USER_REQUEST});
           let config = {
               headers : {
                   'Content-Type': 'application/json'
               }
           };
           let response = await Axios.post('/user/register', JSON.stringify(user), config);
           dispatch({type : REGISTER_USER_SUCCESS, payload : response.data});
           dispatch(setAlert('Registration Success', 'success')); //////// Alert System Success
           history.push('/users/login'); /////
       }
       catch(error) {
           console.log(error.response.data.errors);  //////// Alert System Failure
           let errorList = error.response.data.errors; //////// Alert System Failure
           await errorList.forEach(alert => dispatch(setAlert(alert.msg, 'danger'))); //////// Alert System Failure
           dispatch({type: REGISTER_USER_FAILURE, payload: error});
       }
   }
};


///// Login a User
let loginUser = (user, history) => {
    return async (dispatch) => {
        try{
            dispatch({type : LOGIN_USER_REQUEST});
            let config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };
            let response = await Axios.post('/user/login', JSON.stringify(user), config);
            dispatch({type : LOGIN_USER_SUCCESS, payload : response.data});
            dispatch(setAlert('Login Success', 'success')); //////// Alert System Success
            if(localStorage.token) {    ///////// User is Login Get User Information Only Write After Get User Information actions Time and Check Browser Once Login Look In REDUX User Information---------------------->
                dispatch(getUserInfo());
            }
            history.push('/'); /////
        }
        catch(error) {
            console.log(error.response.data.errors);  //////// Alert System Failure
            let errorList = error.response.data.errors; //////// Alert System Failure
            await errorList.forEach(alert => dispatch(setAlert(alert.msg, 'danger'))); //////// Alert System Failure
            dispatch({type: LOGIN_USER_FAILURE, payload: error});
            
        }
    }
 };

 //// GET User Information
 let getUserInfo = () => {
     return async (dispatch) => {
         try {
            if(localStorage.token){
                setAuthToken(localStorage.getItem('token'));
            }

            dispatch({type : GET_USER_INFO_REQUEST});
            let response = await Axios.get('/user/');
            dispatch({type : GET_USER_INFO_SUCCESS, payload : response.data});
         }
         catch (error) {
               dispatch({type : GET_USER_INFO_FAILURE, payload: error});
         }
     }
 }

 /////// LOGOUT USER ////////////////////////////////////////////
    let logOut = (history) => {
        return async (dispatch) => {
            try{
                dispatch({type : LOGOUT_USER});
                history.push('/');
                dispatch(setAlert('Logout is Success', 'success')); /////////////////////////
            }
            catch(error) {
              console.error(error);
            }
        }
    }

/////// UPDATE USER ADDRESS////////////////////////////////////////////

let UpdateUserAddress = (address) => {
    return async (dispatch) => {
        try {
           if(localStorage.token){
               setAuthToken(localStorage.getItem('token'));
           }
           let config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };
           dispatch({type : UPDATE_ADDRESS_REQUEST});
           let response = await Axios.post('/user/address' , JSON.stringify(address), config);///////////////////////////////////////////////// 
           dispatch({type : UPDATE_ADDRESS_SUCCESS, payload : response.data});
        }
        catch (error) {
              dispatch({type : UPDATE_ADDRESS_FAILURE, payload: error});
        }
    }
}




export{registerUser, loginUser, getUserInfo , logOut , UpdateUserAddress};