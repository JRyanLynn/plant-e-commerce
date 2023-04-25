import { publicRequest } from "../helpers";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
//api calls can be found in the helpers.js file

//dispatch from useDispatch hook, user = username & PW
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        //makes post request for user
        const res = await publicRequest.post('auth/login', user);
        //from action.payload in userSlice
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}