import {SAY_GOOD_AFTERNOON, SAY_GOOD_EVENING, SAY_GOOD_MORNING} from "./wish-message.actionTypes";

let sayGoodMorning = () => {
   return {
       type : SAY_GOOD_MORNING,
       payload : 'Good Morning Message'
   }
};

let sayGoodAfternoon = () => {
    return {
        type : SAY_GOOD_AFTERNOON,
        payload : 'Good Afternoon Message'
    }
};

let sayGoodEvening = () => {
    return {
        type : SAY_GOOD_EVENING,
        payload : 'Good Evening Message'
    }
};

export {sayGoodMorning , sayGoodAfternoon , sayGoodEvening}
