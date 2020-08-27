import { getSingleData } from "../../lib/data";
import Pagination from "react-js-pagination";
import React, { Component } from "react";

export default class FirstPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: 15,
			info: [],
		};
	}

	async handlePageChange(pageNumber) {
		const singleData = await getSingleData(pageNumber);
		this.setState({ info: singleData });
		this.setState({ activePage: pageNumber });
	}

	render() {
		return (
			<div>
				<table>
					<tr>
						<th>UserID</th>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
					<tr key={this.state.info.userId}>
						<td>{this.state.info.id}</td>
						<td>{this.state.info.title}</td>
						<td>{this.state.info.body}</td>
					</tr>
				</table>
				<Pagination
					activePage={this.state.activePage}
					itemsCountPerPage={10}
					totalItemsCount={450}
					pageRangeDisplayed={5}
					onChange={this.handlePageChange.bind(this)}
				/>
			</div>
		);
	}
}
