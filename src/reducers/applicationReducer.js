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
      return { applications: updated_applications };
    case "DELETE_APPLICATION":
      const filtered_applications = state.applications.map(
        (application) => application.id !== action.payload.id
      );
      return { applications: filtered_applications };
    case "SORT_BY_DEADLINE":
      const deadline_sorted_applications = [
        ...state.applications,
      ].sort((a, b) => (a.deadline > b.deadline ? 1 : -1));
      return { applications: deadline_sorted_applications };
    case "SORT_BY_STATUS":
      const status_sorted_applications = [...state.applications].sort((a, b) =>
        a.stage > b.stage ? 1 : -1
      );
      return { applications: status_sorted_applications };
    default:
      return state;
  }
};

export default applicationReducer;
