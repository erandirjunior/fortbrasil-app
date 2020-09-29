import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { data } = yield call(api.post, '/login', payload);
    if (!data.token) {
      throw new Error('Erro no login');
    }
    yield delay(1000);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    yield put(signInSuccess(data.user, data.token));
    // yield put(signInSuccess({}, null));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados!',
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
