import '../styles/app.css';
import Main from './Main';
import NavBar from './NavBar';
import React from 'react';
import Image from '../assets/gavryl-for-inprnt.jpg';
import Image2 from '../assets/dmh5h.jpg';

function App() {

  return (
    <div className="app">
      <div className="app-content">
        <Main title="Brandon Lee Tran" subtitle="Software Engineer" image={Image} button={false}/>
        <Main title="Resumé" subtitle="Download below." image={Image2} button={true}/>
      </div>
    </div>
  );
}

export default App;
