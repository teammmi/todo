import React, { Component } from 'react';
import HeaderComponent from './Component/HeaderComponent.js';
import List from './Component/List';

import FormSumit from './Component/FormSumit';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: [ { id: 1, name: 'Shopping', complete: false }, { id: 2, name: 'GGWP', complete: false } ],
			message: ''
		};
		// โครตงงงง
		this.onChangMessage = this.onChangMessage.bind(this);
		this.onSubmitMessage = this.onSubmitMessage.bind(this);
	}

	onChangMessage(e) {
		this.setState({ message: e.target.value });
	}

	onSubmitMessage(e) {
		e.preventDefault(); //ป้องกันการเปลี่ยนหน้า
		let oldTodos = this.state.todos;
		let todoLength = this.state.todos.length;
		let lastID = this.state.todos[todoLength - 1].id;
		let newmessage = { id: lastID + 1, name: this.state.message, complete: false };
		oldTodos.push(newmessage);
		this.setState({ todos: oldTodos });
	}

	render() {
		return (
			<div
				style={{
					borderColor: '#e12c6a',

					borderWidth: 2,

					borderStyle: 'solid',

					borderRadius: 4,

					width: 1024,

					margin: 'auto',

					marginTop: 20
				}}
			>
				<HeaderComponent />
				<List todos={this.state.todos} />
				<FormSumit onChangMessage={this.onChangMessage} onSubmitMessage={this.onSubmitMessage} />
			</div>
		);
	}
}

export default App;
