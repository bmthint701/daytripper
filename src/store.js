import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { subscription } from "./reducers/subscription";
import { auth } from "./reducers/auth";
import { products } from "./reducers/products";
import { customerSubscription } from "./reducers/customer_subscription";
import { shop } from "./reducers/shop";
import { order } from "./reducers/order";
import { customer } from "./reducers/customer";


const rootReducer = combineReducers({
  auth,
  subscription,
  products,
  customerSubscription,
  shop,
  order,
  customer
});

const middleware = applyMiddleware(
  promiseMiddleware(),
  thunkMiddleware,
  logger
);


const store = createStore(rootReducer, middleware);

export default store;
