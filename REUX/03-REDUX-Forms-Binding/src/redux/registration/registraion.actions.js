import {REGISTER_USER} from "./registration.actionTypes";

let registerUser = (user) => {   // submit the data to store
  return {
      type : REGISTER_USER,
      payload : user
  }
};
export {registerUser};
