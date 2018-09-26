
import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
			this.setState({ title: 'AMZN'})
		})
	}

	changeStock(e){
		getData(e.target.innerHTML).then(data => {
			this.setState({ data })
		})
		this.setState({ title: e.target.innerHTML})
		e.preventDefault();
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<div className="btn-group" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-secondary" onClick={this.changeStock.bind(this)} >AMZN</button>
					<button type="button" className="btn btn-secondary" onClick={this.changeStock.bind(this)} >MSFT</button>
					<button type="button" className="btn btn-secondary" onClick={this.changeStock.bind(this)} >AAPL</button>
				</div>			
				<h1 className='text-center'>{this.state.title}</h1>
				<Chart type={'svg'} data={this.state.data} />
			</div>
		)
	}
}

export default ChartComponent