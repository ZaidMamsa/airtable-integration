import React from 'react';
import Row from './Row';
import './App.css';
import axios from 'axios';

function App() {
  const [veggies, setVeggies] = React.useState(null);
  async function fetchData() {
    const res = await axios.get(
      'https://api.airtable.com/v0/appPnOcQjOnX4INQH/Vegetables',
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    console.log(res.data);
    setVeggies(res.data.records);
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  if (!veggies) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>The Definitive Vegetable Ranking</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Notes</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {veggies.map((record) => (
            <Row key={record.id} info={record.fields} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
