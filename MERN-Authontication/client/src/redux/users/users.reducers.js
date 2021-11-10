import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE, LOGOUT_USER, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_SUCCESS, UPDATE_ADDRESS_FAILURE } from "./users.actionTypes";

export const USER_FEATURE_KEY = 'user';

let initialState = {
    loading : false,
    user : null,     
    token : null,
    isAuthenticated : false,
    errorMessage : null
};

let userReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) { 
        // Register a User
        case REGISTER_USER_REQUEST : 
            return {
                ...state,
                loading : true
            };
        case REGISTER_USER_SUCCESS : 
            return {
                ...state,
                loading : false
                
            };
        case REGISTER_USER_FAILURE : 
            return {
                ...state,
                loading : false,
                errorMessage : payload
            };

            //// Login a User
         case LOGIN_USER_REQUEST : 
         return {
             ...state,
             loading : true
         };
     case LOGIN_USER_SUCCESS : 
     localStorage.setItem('token', payload.token); /////////////////////// Important
         return {
             ...state,
             loading : false,
             token : payload.token, /////////////// Important
             isAuthenticated : true ///////////////////// Important
             
         };
     case LOGIN_USER_FAILURE : 
         localStorage.removeItem('token'); //////////////////////////// Important
         return {
             ...state,
             loading : false,
             errorMessage : payload,
             token : null, /////////////// Important
             isAuthenticated : false ///////////////////// Important
         };

           //// GET a User Information
           case GET_USER_INFO_REQUEST : 
           return {
               ...state,
               loading : true
           };
       case GET_USER_INFO_SUCCESS : 
       localStorage.setItem('user', JSON.stringify(payload)); /////////////////////// Important
           return {
               ...state,
               loading : false,
               user : payload, /////////////user Information////////////////////////
                isAuthenticated : true ////// Refresh The Page User Information Automatically Come and Show on Browser
           };
       case GET_USER_INFO_FAILURE : 
           localStorage.removeItem('user'); //////////////////////////// Important
           return {
               ...state,
               loading : false,
               errorMessage : payload,
               user : null   
           };

    ///// LOGOUT USER  
    case LOGOUT_USER : 
        localStorage.removeItem('token'); ////////////////
        localStorage.removeItem('user'); //////////////////
        return{
           ...state,
           user : null,
           isAuthenticated : false,
           token : null
        }

    /////////////// Update User Address //////////////
    case UPDATE_ADDRESS_REQUEST :
        return {
            ...state,
            loading : true
        };
    case UPDATE_ADDRESS_SUCCESS : 
    localStorage.setItem('user' , JSON.stringify(payload));
        return {
            ...state,
            loading : false,
            user : payload,
            isAuthenticated : true
        };
        case UPDATE_ADDRESS_FAILURE : 
            return {
                ...state,
                loading : false,
                errorMessage : payload
            };
      default : return state;
    }
};
export {userReducer};
