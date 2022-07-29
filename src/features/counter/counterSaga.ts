import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

import { PayloadAction } from '@reduxjs/toolkit';

// export function log(action: PayloadAction) {
//   console.log('log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting 1s');

  yield delay(1000);

  console.log('waiting done, dispatch action');

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counter saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  //   yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
