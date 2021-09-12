import { fork, all } from 'redux-saga/effects';
// import { PayloadAction } from '@reduxjs/toolkit';

// function* updateBySaga(action: PayloadAction<>) {
//   yield put(update(action.payload));
// }

function* saga() {
  // yield debounce(500, 'test', updateBySaga);
}

export default function* rootSaga() {
  yield all([fork(saga)]);
}
