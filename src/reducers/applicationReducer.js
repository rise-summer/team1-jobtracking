const initialState = {
  url: ""
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_URL":
      return Object.assign({}, state, {url: action.payload });
    default:
      return state;
  }
};


export default applicationReducer;
