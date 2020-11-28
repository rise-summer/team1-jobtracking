import loggedReducer from "./isLogged";
import applicationReducer from "./applicationReducer";
import { combineReducers } from "redux";



const allReducers = combineReducers({
  isLogged: loggedReducer,
  applicationReducer: applicationReducer
});

export default allReducers;
