import axios from "axios";
import {
    USER_SUCCESS,
    USER_FAIL
} from "../constants/types"
const listUserDetails = (info) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'get',
                url: `https://localhost:7074/api/Employee/GetEmployeeByUserId?userId=${info}`,
            });
            const  data  = res.data[0];
            if (data) {
                await dispatch({
                    type: USER_SUCCESS,
                    payload: data
                });
            }
        }
        catch (error) {
            console.log(error);
            if (error.reponse) {
                dispatch({
                    type: USER_FAIL,
                    payload: error.reponse.data.message,
                });
            }
        }
    }
}
export {listUserDetails};