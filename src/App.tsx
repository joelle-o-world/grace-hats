import React, {useState} from 'react';
import './App.sass'

import Footer from './components/Footer'
import HomepageImages from './components/HomepageImages';
import {PhotoshopPicker} from 'react-color'


const series = (i:number, spacing=100) => {
  let angle = i + 2
  let rotations = i / (Math.PI * 2)
  let r = rotations * spacing

  let x = r * Math.cos(angle)
  let y = r * Math.sin(angle)

  return {x,y}
}

function App() {
  const [color, setColor] = useState('f8b87f')
  return (
    <div className="App" style={{backgroundColor: color}}>
      <h1 className="MainHeader">sibyl benign</h1>
      <HomepageImages/>
    </div>
  );
}

export default App;
