import { authConstants } from "../actions/constants";

const initstate={
    name:"Pankaj"
};

export default(state=initstate,action)=>{
    console.log(action)
    switch(action.payload){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                ...action.payload
            }
            break;
    }
    return state;
}