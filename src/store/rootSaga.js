// import { takeLatest } from "redux-saga/effects";
// import { handleGetUser } from "./handlers/user";
// import { GET_USER } from "../ducks/user";

// export function* watcherSaga() {
//   yield takeLatest(GET_USER, handleGetUser);
// }


import { all } from 'redux-saga/effects';
import { UserSaga } from './sagas';

export default function* rootSaga() {
        yield all([
            UserSaga()
        ])
}