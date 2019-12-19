import React, {Component} from 'react';

class TodoStateFull extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['Tomate', 'Cenoura', 'Repolho']
		};
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	addItem(item) {
		this.setState({items: [...this.state.items, item]});
	}

	removeItem() {
		this.setState({items: [...this.state.items.slice(1)]});
	}

	render() {
		const {items} = this.state;

		return (
			<div className="container__todo">
				<p>minha lista</p>
				<ul className="lista">{items.map(item => <li key={item.id}>{item}</li>)}</ul>
                <button onClick={() => this.addItem('Abóbora')}>Adicionar item</button>
                <button onClick={() => this.removeItem()}>Remover item</button>
			</div>
		);
	}
}

export default TodoStateFull;
