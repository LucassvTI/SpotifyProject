import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";

import sagas from "./sagas";
import reducers from "./ducks";

const middleware = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

export default store;