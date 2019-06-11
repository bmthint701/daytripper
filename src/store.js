import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { activities } from "./reducers/activities";


const rootReducer = combineReducers({
  activities
});

const middleware = applyMiddleware(
  promiseMiddleware(),
  thunkMiddleware,
  logger
);


const store = createStore(rootReducer, middleware);

export default store;
