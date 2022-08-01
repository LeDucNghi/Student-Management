import { LoginPayload, authActions } from './authSlice';
import { call, delay, fork, put, take } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    console.log('handle login', payload);

    localStorage.setItem('access_token', 'fake_token');

    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'nghi',
      })
    );
  } catch (error) {
    console.log('🚀 ~ file: authSaga.ts ~ line 20 ~ function*handleLogin ~ error', error);
    // yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield delay(1000);
  console.log('handle logout');
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    // vì lúc này chỉ cho hàm handleLogin chạy đc đúng 1 lần đầu thôi và nó sẽ đợi ( lắng nghe ) thằng logout
    // nhưng vì logout xong phải login lại đc ( vòng lặp vô tận ) nên phải dùng vòng lặp while(true) để có thể login logout liên tục
    // khi thằng login chưa đc lắng nghe ( thực hiện ) thì thằng logout cũng k thể thực hiện đc
    // nhưng khi đã login rồi thì phải logout đc
    // nên phải check coi trong local có access_token chưa, nếu chưa thì mới lắng nghe thằng login còn ko thì ngược lại
    // hàm fork là hàm non-blocking - là 1 hàm khi chưa chạy xong nhưng vẫn chạy tiếp hàm khác

    console.log('watch login');

    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      // nó sẽ lắng nghe thằng này trc
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    // xong tới thằng này

    // cái handleLogout này có thể xài hàm fork đc
    // nhưng khi giả dụ mình có xử lí thêm gì đó ở hàm logout thì trong khi nó đang xử lí thì nó lại bắt đầu chu kỳ mới
    // tức là nhảy vào while này tiếp, khi đó hàm logout chưa chạy xong để xóa localStorage để bắt đầu login tiếp
    // thì lúc này trong hàm nó vẫn sẽ nhận ra là còn localStorage nên k thể login tiếp đc
    // nên bh sẽ sử dụng hàm call để đợi hàm logout chạy xong mới bắt đầu vòng while mới
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
