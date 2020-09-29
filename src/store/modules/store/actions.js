export function storeRequest() {
  return {
    type: '@store/STORE_REQUEST',
  };
}

export function storeSuccess(store) {
  return {
    type: '@store/STORE_SUCCESS',
    payload: store,
  };
}

export function storeFailure() {
  return {
    type: '@store/STORE_FAILURE',
  };
}
