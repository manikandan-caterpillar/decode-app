// Imports: Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { MANAGE_APPLICATION } from "../constants";

// Custom Options
const logger = createLogger({
  duration: false,
  timestamp: false,
  predicate: () => false,
  // predicate: (getState, action) => {
  //   if (action.type === MANAGE_APPLICATION.CLEAR) {
  //     // console.clear();
  //     // console.log(action.currentPartyList);
  //   }
  //   return false;
  // }
});
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const rootReduxStore =
  createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, logger)
    )
  );

const persistor = persistStore(rootReduxStore);
export {
  rootReduxStore,
  persistor
}