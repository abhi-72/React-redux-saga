import { call, put, takeLatest } from "redux-saga/effects";
import { requestGetUsers, requestGetUser } from '../../services';
import { types } from "../constants"

export function* fetchUsers(action) {
  try {
    const { data } = yield call(requestGetUsers);
    yield put({
      type: types.GET_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

export function* userDetail(action) {
  try {
    const { data } = yield call(requestGetUser, action);
    yield put({
      type: types.GET_USER_DETAIL_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

export function* UserSaga() {
  yield takeLatest(types.GET_USER, fetchUsers)
  yield takeLatest(types.GET_USER_DETAIL, userDetail)
}