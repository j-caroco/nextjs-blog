import { getSingleData, getNumberOfItems } from "../../lib/data";
import Pagination from "react-js-pagination";
import React, { Component } from "react";

export async function getStaticProps() {
	const singleData = await getSingleData(1);
	const numberOfItems = await getNumberOfItems();
	return {
		props: { singleData, numberOfItems },
	};
}
export default class FirstPost extends Component {
	constructor(props) {
		super(props);
		console.log(props.numberOfItems);

		this.state = {
			activePage: 1,
			info: props.singleData,
			total: props.numberOfItems,
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
					<thead>
						<tr>
							<th>UserID</th>
							<th>ID</th>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						<tr key={this.state.info.userId}>
							<td>{this.state.info.id}</td>
							<td>{this.state.info.title}</td>
							<td>{this.state.info.body}</td>
						</tr>
					</tbody>
				</table>
				<Pagination
					activePage={this.state.activePage}
					itemsCountPerPage={1}
					totalItemsCount={this.state.total}
					pageRangeDisplayed={5}
					onChange={this.handlePageChange.bind(this)}
				/>
			</div>
		);
	}
}
