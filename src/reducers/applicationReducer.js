const initialState = {
  applications: {
    id: {
      url: "",
      role: "",
      company: "",
      deadline: "",
      location: "",
      description: "",
      stage: "Interested",
    },
  },
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_URL":
      return Object.assign({}, state, { url: action.payload.url });
    case "ADD_ROLE":
      return Object.assign({}, state, { role: action.payload.role });
    case "ADD_COMPANY":
      return Object.assign({}, state, { company: action.payload.company });
    case "ADD_DEADLINE":
      return Object.assign({}, state, { deadline: action.payload.deadline });
    case "ADD_LOCATION":
      return Object.assign({}, state, { location: action.payload.location });
    case "ADD_DESCRIPTION":
      return Object.assign({}, state, {
        description: action.payload.description,
      });
    case "ADD_STAGE":
      return Object.assign({}, state, { stage: action.payload.stage });
    case "ADD_APPLICATION":
      return {
        ...state,
        applications: {...state.applications, ...action.payload}
      };
    default:
      return state;
  }
};

export default applicationReducer;
