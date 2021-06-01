import React from 'react';
import logo from './logo.svg';
import './App.css';

import ExploreLayout from './components/ExploreLayout';

const series = (i:number) => ({
  x: i * 300,
  y: 0
})

function App() {
  return (
    <div className="App">
      <ExploreLayout distributionFunction={series}>
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <p>E</p>
      </ExploreLayout>
    </div>
  );
}

export default App;
