import { all } from 'redux-saga/effects';
import { authSaga } from 'store/Auth/saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
