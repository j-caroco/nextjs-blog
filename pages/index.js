import axios from "axios";
import MUIDataTable from "mui-datatables";
import { getData } from "../lib/data";
import Link from "next/link";

const columns = ["id", "created_at", "entity", "amount", "type", "source"];

export default function Home({ names }) {
	return (
		<>
			<h2>
				<Link href="/posts/first-post">
					<a>Go to server side pagination</a>
				</Link>
			</h2>
			<MUIDataTable title={"Random data"} data={names} columns={columns} />
		</>
	);
}

export async function getStaticProps() {
	const names = [];
	const data = await getData();

	data.forEach((element) => names.push(Object.values(element)));

	return {
		props: {
			names,
		},
	};
}
