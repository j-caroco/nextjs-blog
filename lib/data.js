import Axios from 'axios'

export async function getData (req, res) {
    let data = [];

     await Axios.get('https://5e5d229a97d2ea00147971d0.mockapi.io/sq/transactions')
        .then(response => data = response.data)
        .catch(err => console.log);
        
        return data;
        
}