import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddlware from "redux-saga";
import sagas from "./rootSagas";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddlware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);
saga.run(sagas);
export default store;
