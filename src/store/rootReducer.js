import { combineReducers } from 'redux'
import { user } from "./reducers";


const rootReducer = combineReducers({
    user: user
  });

  export default rootReducer;