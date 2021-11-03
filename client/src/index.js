import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/js/dist/tooltip";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
