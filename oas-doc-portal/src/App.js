import logo from "./logo.svg";
import "./App.css";
import SwaggerUI from "swagger-ui";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			definitionLink:
				"https://api-ecf-services-o3dqoakkaa-ue.a.run.app/openapi.json",
		};
	}

	componentDidMount() {
		SwaggerUI({
			domNode: document.getElementById("api-data"),
			url: this.state.definitionLink,
		
		});
	}

	render() {
		return (
			<div className="App">
				<div id="api-data" />
			</div>
		);
	}
}

export default App;
