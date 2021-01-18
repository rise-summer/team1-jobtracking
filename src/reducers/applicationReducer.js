const initialState = {
  applications: [],
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPLICATION":
      console.log(state)
      console.log(state.applications)
      return {
        ...state,
        applications: [...state.applications, action.payload],
      };
    default:
      return state;
  }
};

export default applicationReducer;
