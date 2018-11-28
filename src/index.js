import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './Basic';
import './styles.css';
const axios = require('axios');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	onClick = async () => {
		console.log('going to fetch');
		this.setState({ isSending: true });
		let response;
		try {
			response = await axios({
				method: 'post',
				url: 'https://l96yqm590l.sse.codesandbox.io/',
				data: {
					number: this.state.number,
				},
			});
		} catch (error) {
			console.log(error);
		}
		this.setState({ number: response.data });
		console.log('success');
		console.log(response);
		this.setState({ isSending: false });
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.onClick}> button </button>
				<h1>
					Hello, {this.state.number} {this.props.name}
				</h1>
				<Basic />
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
