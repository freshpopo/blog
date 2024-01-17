import { combineReducers } from "redux";
import user from './user_reducer';
import toasts from "./toasts_reducer";

const rootReducer = combineReducers({
  user,
  toasts,
})

export default rootReducer;