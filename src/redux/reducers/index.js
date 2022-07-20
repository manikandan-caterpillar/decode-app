import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage";
import { applicationReducer } from './applicationReducer';
import { MANAGE_APPLICATION } from '../constants';
const reducers = {
  manageApplication: applicationReducer,
}

const appRootReducer = combineReducers(reducers);

// Redux: Root Reducer
const rootReducer = (state, action) => {
  if (action.type === MANAGE_APPLICATION.CLEAR) {
    storage.removeItem("persist:root");
    localStorage.clear();
    return appRootReducer(undefined, action);
  }
  return appRootReducer(state, action);
};

// Exports
export default rootReducer;