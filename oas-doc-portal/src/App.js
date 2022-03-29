import logo from "./logo.svg";
import "./App.css";
import SwaggerUI from "swagger-ui";
import React, {
	Component
} from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			definitionLink: "http://localhost:8083/openapi.json",
		};
	}

	componentDidMount() {
		SwaggerUI({
			domNode: document.getElementById("api-data"),
			url: this.state.definitionLink,
		});
	}

	swaggerhub(inputMethod, inputResource, inputParams) {
		let url = ""
		if (inputParams) {
			url = "https://api.swaggerhub.com/apis/" + inputResource + "?" + inputParams
		} else {
			url = "https://api.swaggerhub.com/apis/" + inputResource
		}

		return fetch(url, {
			method: inputMethod
		}).then(response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error('There was an issue requesting the API')
		}).then(json => {
			return json
		})
	}



	render() {
		return ( <
			div className = "App" >
			<
			div id = "api-data" / >
			<
			/div>
		);
	}
}

export default App;