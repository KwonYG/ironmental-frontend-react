import { takeEvery, call, put } from 'redux-saga/effects'
import { sendAuth } from 'src/services/auth/requests'
import {
  SEND_AUTH_CONFIRM,
  sendAuthConfirmSuccess,
  sendAuthConfirmFailure,
  startAuthLoading,
  endAuthLoading,
} from 'src/services/auth/actions'
import { AnyAction } from 'redux'

const sendAuthSaga = function*(action: AnyAction) {
  try {
    yield put(startAuthLoading())

    // github callback시 반환되는 code 쿼리, 추후 다른 로그인 Oauth를 지원하게 될 때 주의해야할 듯
    const { code } = action.payload
    const response = yield call(sendAuth, code)
    const { message } = response.data

    // TODO: API 완성되면 setUser put하기

    yield put(sendAuthConfirmSuccess(message))
  } catch (e) {
    yield put(sendAuthConfirmFailure(e))
  } finally {
    yield put(endAuthLoading())
  }
}

export function* rootAuthSaga() {
  yield takeEvery(SEND_AUTH_CONFIRM, sendAuthSaga)
}
