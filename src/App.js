import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Scroll from './components/scroll/scroll.component';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState(
				() => {
					return { monsters: users };
				}
			));
	}

	onSearchChange = (e) => {
		const searchField = e.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	}

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filteredMonsters = monsters.filter((m) => {
			return m.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBox
					className="monster-search-box"
					placeholder="Search monsters"
					onChangeHandler={ onSearchChange }
				/>
				<Scroll>
					<CardList
						mobs={ filteredMonsters }
					/>
				</Scroll>
				
				{/* Old code */}

				{/* <input
					className="search-box"
					type="search"
					placeholder="Search monsters"
					onChange={ onSearchChange }
				/>
				{
					filteredMonsters.map((monster) => {
						return (
							<div key={ monster.id }>
								<h1>{ monster.name }</h1>
							</div>
						);
					})
				} */}
			</div>
		);
	}
}

export default App;
