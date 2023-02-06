import { history } from "../../App";
import { LOGIN, USER_LOGIN } from "../Types/AccountType";

let userLogin = {};
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
    user: userLogin
};
export const AccoutReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.user));
            state.user = action.user;

            return { ...state };
        default:
            return { ...state };
    }
};