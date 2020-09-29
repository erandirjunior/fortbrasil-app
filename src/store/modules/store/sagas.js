import { takeLatest, delay, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { storeSuccess, storeFailure } from './actions';
import { signOut } from '~/store/modules/auth/actions';

export function* loadStores() {
  try {
    const { data } = yield call(api.get, '/shops');

    const stores = data.map(({ lat, long, ...rest }) => ({
      ...rest,
      latitude: Number(lat),
      longitude: Number(long),
    }));
    yield delay(1000);
    yield put(storeSuccess(stores));
  } catch (err) {
    yield put(storeFailure());
    if (err.response.status === 401) {
      yield put(signOut());
      return;
    }
    Alert.alert('Ops!', 'Nao foi possivel encontrar as lojas.');
  }
}

export default all([takeLatest('@store/STORE_REQUEST', loadStores)]);
