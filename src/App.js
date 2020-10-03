import React from 'react';
import Row from './Row';
import './App.css';

function App() {
  return (
    <div>
      <h1>The Definitive Vegetable Ranking</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Notes</th>
          <th>Rating</th>
        </tr>
        <Row
          info={{
            name: 'Cabbage 🥬',
            notes: 'Needs to be seasoned well to taste good',
            rating: 3,
          }}
        />
        <Row
          info={{
            name: 'Mushroom 🍄',
            notes: 'Very solid',
            rating: 8,
          }}
        />
      </table>
    </div>
  );
}

export default App;
