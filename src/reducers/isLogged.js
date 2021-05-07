const initialState = {
  token: null,
  logged_in: false,
  authentication: null
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { token: action.payload.token, logged_in: true, authentication: action.payload.authentication };
    case "SIGN_OUT":
      return { token: null, logged_in: false, authentication: null };
    default:
      return state;
  }
};

export default loggedReducer;
