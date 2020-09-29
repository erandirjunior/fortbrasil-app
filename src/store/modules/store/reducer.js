const INITIAL_STATE = {
  loading: false,
  stores: [],
};

export default function store(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@store/STORE_REQUEST': {
      return { ...state, loading: true };
    }
    case '@store/STORE_SUCCESS': {
      const stores = action.payload;
      return { ...state, loading: false, stores };
    }
    case '@store/STORE_FAILURE': {
      return { ...state, loading: false };
    }
    case '@auth/SIGN_OUT': {
      return { ...state, loading: false, stores: [] };
    }
    default:
      return state;
  }
}
