import { GET_USER_INFO, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./users.actionTypes";

export const USERS_FEATURE_KEY = 'user';

let initialState = {
    loading: false,
    isAuthenticated : false,   // JWT
    token : null,            // default
    errorMesssage : '',
    user : {}
};

let userReduser = (state = initialState , action) => {
    let {type, payload} = action;
    switch(type){
     case REGISTER_USER_REQUEST:
     case LOGIN_USER_REQUEST :
         return {
             ...state,
             loading : true
         }
     case REGISTER_USER_SUCCESS: 
     case LOGIN_USER_SUCCESS : 
     localStorage.setItem('token', payload.token);    // Local Storage in Store
     return {
         ...state,
         loading : false,
         isAuthenticated : true,              // JWT
         token : payload.token               // Token
     };
     case REGISTER_USER_FAILURE : 
     case LOGIN_USER_FAILURE :
     case LOGOUT : 
     localStorage.removeItem('token');                 // Local Storage Remove
     localStorage.removeItem('user'); 
     
     return {
         ...state,
         loading : false,
         isAuthenticated : false,
         token : null,
         user : {}
     };
     case GET_USER_INFO : 
     localStorage.setItem('user' , JSON.stringify(payload));
     return {
         ...state,
         isAuthenticated : true,
         user : payload

     };
     default : return state;               ///////// Line Miss Big Mistake ////////////
   }
};
export {userReduser}            // go to root.reduser.js