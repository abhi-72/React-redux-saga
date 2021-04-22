import { types } from "../constants"


// User
export const getUser = () => ({
    type: types.GET_USER
});

// export const getUserSuccess = (data) => (
//     {
//     type: types.GET_USER_SUCCESS,
//     data: data
// });


// User detail
export const getUserDetail = (id) => ({
    type: types.GET_USER_DETAIL,
    payload: id
});

// export const getUserDetailSuccess = (data) => ({
//     type: types.GET_USER_DETAIL_SUCCESS,
//     payload: data
// });