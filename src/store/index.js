import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducers/rootReducer";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export default { store, persistor };
