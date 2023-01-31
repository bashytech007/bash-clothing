import {compose,createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist'

import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import logger from'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga';
const persistConfig = {
  key: "root",
  storage:storage,
  whitelist: ["cart"],
};

const sagaMiddleware=createSagaMiddleWare();

const persistedReducer = persistReducer(persistConfig, rootReducer);
 
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store=createStore(persistedReducer,undefined,composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor=persistStore(store);

//root-reducer