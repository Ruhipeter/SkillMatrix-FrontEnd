import {
    USER_SUCCESS,
    USER_FAIL
} from "../constants/types";

// const initialState = {
//     user:{
//       userId:0,
//       userName:"",
//       location:"",
//       designation:"",
//       department:"",
//       reportingManager:"",
//       employeeCode:"",
//       team:"",
//       band:"",  
//       name:"",
//       status:true,
  
//     },
//   };
const initialState ={
    users:{},
}
  const userReducers =(state=initialState,action)=>{
      switch(action.type){
        case USER_SUCCESS:
            console.log(action.payload)
            return { ...state, users:action.payload}
        case USER_FAIL:
            return state;
        default:
            return state;
      }
  }
  export default userReducers;