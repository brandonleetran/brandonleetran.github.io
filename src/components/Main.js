import '../styles/main.css';
import React from 'react'

function Main(props) {

  let hasButton = props.button;
  if (hasButton) {
    console.log("fafads");

    return (
      <div className="main" style={{ backgroundImage: `url(${props.image})` }}>
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