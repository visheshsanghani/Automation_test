import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import login_Reducer from "./login_Reducer";
import score_Reducer from "./score_Reducer";

export default combineReducers({
  form : formReducer,
  login : login_Reducer,
  score : score_Reducer
});