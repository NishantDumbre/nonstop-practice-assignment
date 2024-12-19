import { combineReducers } from "redux";
import { candidateReducer } from "./candidateReducer";

const rootReducer = combineReducers({
  candidates: candidateReducer,
});

export default rootReducer;
