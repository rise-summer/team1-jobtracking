const initialState = {
  url: "",
  role: "",
  company: "",
  deadline: "",
  location: "",
  description: "",
  stage: ""
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_URL":
      return Object.assign({}, state, { url: action.payload.url });
    case "ADD_APPLICATION":
      return Object.assign({}, state, {
        role: action.payload.role,
        company: action.payload.company,
        deadline: action.payload.deadline,
        location: action.payload.location,
        description: action.payload.description,
        stage: action.payload.stage,
      });
    default:
      return state;
  }
};

export default applicationReducer;
