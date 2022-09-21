import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import { getNews } from "./apis";

export function* onLoadNewAsyncs( ) {
    console.log("ewdfgsgf");
  try {
    const response = yield call(getNews);
    yield put({ type: types.NEWS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.NEWS_FAIL, payload: error });
  }
}
export function* onLoadNews() {
  yield takeLatest(types.NEWS_START, onLoadNewAsyncs);
}


const newsSaga = [fork(onLoadNews)];
export default function* rootSaga() {
  yield all([...newsSaga]);
}
