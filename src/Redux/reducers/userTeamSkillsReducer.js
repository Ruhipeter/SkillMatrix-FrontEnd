import {
    USER_TEAM_SKILLS_SUCCESS,
    USER_TEAM_SKILLS_FAIL
} from "../constants/types";

const initialState = {
    userTeamSkills:[],
  };

  const userTeamSkillsReducers =(state=initialState,action)=>{
      switch(action.type){
        case  USER_TEAM_SKILLS_SUCCESS:
            console.log(action.payload)
            return { ...state, userTeamSkills: action.payload }
        case USER_TEAM_SKILLS_FAIL:
            return state;
        default:
            return state;
      }
  }
  export default userTeamSkillsReducers;