

import axios from 'axios'
import MUIDataTable from "mui-datatables"
import { getData } from '../lib/data';

const columns = ["id", "created_at", "entity", "amount", "type", "source"];
 
const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];
const options = {
  filterType: 'checkbox',
};


export default function Home({ names }) {
  return (
    <MUIDataTable 
      title={"Random data"} 
      data={names} 
      columns={columns} 
      options={options} 
    />
  )
}

export async function getStaticProps() {
  const names = [];
  const data = await getData();

  data.forEach(element => names.push(Object.values(element)) );

  console.log(names);
  return {props: {
    names
  }}

}



