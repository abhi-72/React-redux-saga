import { call, put, takeLatest } from "redux-saga/effects";
import { requestGetUser } from '../../services';
import { types } from "../constants"

export function* fetchClients(action) {
  try {
    const { data } = yield call(requestGetUser);
    yield put({
      type: types.GET_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

export function* UserSaga() {
  yield takeLatest(types.GET_USER, fetchClients)
}