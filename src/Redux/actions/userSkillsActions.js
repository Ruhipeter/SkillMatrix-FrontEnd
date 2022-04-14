import axios from "axios";
import {
    USER_SKILLS_SUCCESS,
    USER_SKILLS_FAIL
} from "../constants/types"

const listUserSkills = (info) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'get',
                url: `https://localhost:7074/api/EmployeeQuestions/GetQuestionsByEmpId?empId=${info}`,
            });
            const { data } = res;
            if (data) {
                await dispatch({
                    type: USER_SKILLS_SUCCESS,
                    payload: data
                });
            }
        }
        catch (error) {
            console.log(error);
            if (error.reponse) {
                dispatch({
                    type: USER_SKILLS_FAIL,
                    payload: error.reponse.data.message,
                });
            }
        }
    }
}
export {listUserSkills};