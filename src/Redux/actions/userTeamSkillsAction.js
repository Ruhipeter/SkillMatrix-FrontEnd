import axios from "axios";
import {
    USER_TEAM_SKILLS_SUCCESS,
    USER_TEAM_SKILLS_FAIL
} from "../constants/types"

const listUserTeamSkills = (empId,teamId) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'get',
                url: `https://localhost:7074/api/EmployeeTeamQuestions/GetQuestionsByEmpIdandTeamId?empId=${empId}&teamId=${teamId}`,
            });
            const { data } = res;
            if (data) {
                console.log(data)
                await dispatch({
                    type: USER_TEAM_SKILLS_SUCCESS,
                    payload: data
                });
            }
        }
        catch (error) {
            console.log(error);
            if (error.reponse) {
                dispatch({
                    type: USER_TEAM_SKILLS_FAIL,
                    payload: error.reponse.data.message,
                });
            }
        }
    }
}
export {listUserTeamSkills};