import { combineReducers } from 'redux';
import userReducers from './userReducers'
import userSkillsReducers from './userSkillsReducer';
const rootReducer = combineReducers({
    user: userReducers,
    userSkill:userSkillsReducers,
});
export default rootReducer;