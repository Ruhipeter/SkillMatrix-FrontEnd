import { combineReducers } from 'redux';
import userReducers from './userReducers'
import userSkillsReducers from './userSkillsReducer';
import userTeamSkillsReducers from './userTeamSkillsReducer';
const rootReducer = combineReducers({
    user: userReducers,
    userSkill:userSkillsReducers,
    userTeamSkill:userTeamSkillsReducers,
});
export default rootReducer;