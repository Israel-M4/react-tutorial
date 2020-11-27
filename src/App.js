import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
	state = {
		characters: [],
	}
	
	removeCharacter = (index) => {
		const {characters} = this.state

		this.setState({
			characters: characters.filter((characters, i) => {
				return i !== index
			}),
		})
	}

	handleSubmit = (character) => {
		this.setState({characters: [...this.state.characters, character]})
	}

	render() {
		/*
		const characters = [
			{
				name: 'Charlie',
				job: 'Janitor',
			},
			{
				name: 'Mac',
				job: 'Bouncer',
			},
			{
				name: 'Dee',
				job: 'Aspring actress',
			},
			{
				name: 'Dennis',
				job: 'Bartender',
			},
		]
		*/
		const { characters } = this.state

		return (
			<div className="container">
				<h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
				<Table characterData={characters} removeCharacter={this.removeCharacter} />
				<Form handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App