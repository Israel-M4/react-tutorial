import React, {Component} from 'react'

class Api extends Component {
	state = {
		data: [],
	}

	// Code is invoked after the component is mounted/inserted into the DOM tree.
	componentDidMount() {
		const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					data: result,
				})
			})
	}

	render() {
		const {data} = this.state

		const result = data.map((entry, index) => {
			return <li key={index}>{entry}</li>
		})

		return (
			<div className="container">	
				<h1>API</h1>
	            <p>Pulling in API Data.</p>
				<ul>{result}</ul>
			</div>
		)
	}
}

export default Api