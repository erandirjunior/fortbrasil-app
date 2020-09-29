import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'mobile',
      storage: AsyncStorage,
      whitelist: ['auth', 'store'],
    },
    reducers,
  );

  return persistedReducer;
};
