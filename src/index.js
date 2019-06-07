import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer";
import Main from "./Main";
import "./index.css";
 
var store = createStore(counter)

ReactDOM.render(
	<Provider store={store}>
		<Main/>
	</Provider>,
  document.getElementById("root")
);