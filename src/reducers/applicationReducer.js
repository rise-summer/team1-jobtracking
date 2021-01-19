const initialState = {
  applications: [],
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPLICATION":
      console.log(state);
      console.log(state.applications);
      return {
        ...state,
        applications: [...state.applications, action.payload],
      };
    case "UPDATE_APPLICATION":
      console.log("UPDATE");
      console.log(action.payload);
      const updated_applications = state.applications.map((application) =>
        application.id === action.payload.id
          ? (application = action.payload)
          : application
      );
      console.log(updated_applications);
      return {applications: updated_applications };
    default:
      return state;
  }
};

export default applicationReducer;
