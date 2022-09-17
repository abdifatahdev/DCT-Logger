import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from './techReducer'

export default combineReducers({
  log: logReducer, // name of state is log
  tech: techReducer
});
