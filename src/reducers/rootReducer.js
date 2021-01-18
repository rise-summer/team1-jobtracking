import loggedReducer from "./isLogged";
import applicationReducer from "./applicationReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isLogged", "applicationReducer"],
};

const appReducer = combineReducers({
  isLogged: loggedReducer,
  applicationReducer: applicationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "STORE_RESET") {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
