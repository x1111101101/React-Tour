import ReactDOM from "react-dom";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <Welcome/>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }

  }


  setInterval(tick, 1000);
  alert("HELLO1")