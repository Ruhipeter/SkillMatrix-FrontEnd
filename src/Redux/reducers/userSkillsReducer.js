import {
    USER_SKILLS_SUCCESS,
    USER_SKILLS_FAIL
} from "../constants/types";

const initialState = {
    userSkills:[],
  };

  const userSkillsReducers =(state=initialState,action)=>{
      switch(action.type){
        case  USER_SKILLS_SUCCESS:
            console.log(action.payload)
            return { ...state, userSkills: action.payload }
        case USER_SKILLS_FAIL:
            return state;
        default:
            return state;
      }
  }
  export default userSkillsReducers;