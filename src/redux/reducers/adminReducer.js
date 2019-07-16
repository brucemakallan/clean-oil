import types from '../actions';

export const initialState = {
  admin: {},
};

const adminReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
  case types.LOGIN: {
    localStorage.setItem('cleanoil-email', payload.email);
    localStorage.setItem('cleanoil-token', payload.token);
    return { ...state, admin: payload };
  }
  default: return state;
  }
};

export default adminReducer;
