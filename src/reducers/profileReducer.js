const initialState = {
  profile: { name: "", position: "", major: "", university: "" },
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_PROFILE":
        console.log(state)
        console.log(state.profile)
        return {
          ...state,
          profile:{...action.payload},
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;