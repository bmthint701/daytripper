import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducers/reducer";
import Main from "./components/Main";
import "./index.css";
 
var store = createStore(counter)

ReactDOM.render(
	<Provider store={store}>
		<Main/>
	</Provider>,
  document.getElementById("root")
);