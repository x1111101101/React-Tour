import ReactDOM from "react-dom";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <Welcome name="SLSLSL"/>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <Comment/>
      </div>
    );
    root.render(element);
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }

  }


  setInterval(tick, 1000);
  alert("HELLO1")