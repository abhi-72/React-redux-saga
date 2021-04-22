import { types } from "../constants";

const initialState = {
    user: undefined
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return { ...state }
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};