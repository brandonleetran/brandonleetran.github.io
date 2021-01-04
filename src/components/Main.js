import '../styles/main.css';
import React from 'react'

function Main(props) {

  let hasButton = props.button;

  if (hasButton) {
    function handleScroll(e) {
      console.log(e.target);
      if (e.deltaY > 0)
      {
        document.getElementById('animation').setAttribute("id", "animation");
      }
    }
    
    return (
      <div onWheelCapture={handleScroll} className="main" id="animation" style={{ backgroundImage: `url(${props.image})` }}>
        <div id="main-header">
          <p id="title">{props.title}</p>
          <p id="subtitle">{props.subtitle}</p>
        </div>
        <div id="btn-container">
          <a href="../assets/resume.pdf" download=""><i id="arrow-icon" class="fa fa-angle-double-down"></i></a>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="main" style={{ backgroundImage: `url(${props.image})` }}>
        <div id="main-header">
          <p id="title">{props.title}</p>
          <p id="subtitle">{props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Main;