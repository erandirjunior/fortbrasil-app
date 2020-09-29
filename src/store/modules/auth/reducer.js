const INITIAL_STATE = {
  signed: false,
  loading: false,
  user: {},
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      return { ...state, loading: true };
    }
    case '@auth/SIGN_UP_REQUEST': {
      return { ...state, loading: true };
    }
    case '@auth/SIGN_IN_SUCCESS': {
      const { token, user } = action.payload;
      return { ...state, signed: true, loading: false, user, token };
    }
    case '@auth/SIGN_FAILURE': {
      return { ...state, loading: false };
    }
    case '@auth/SIGN_OUT': {
      return { ...state, signed: false, loading: false, user: {}, token: null };
    }
    default:
      return state;
  }
}
