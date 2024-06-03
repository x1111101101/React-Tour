import ReactDOM from "react-dom";
import React, {useState} from "react";


function Counter(props) {
  let [count, setCount] = useState(0);
  return <button onClick={()=>setCount(count+1)}>{count}</button>
}

function Abc(props) {
  let [isMe, setIsMe] = useState(false)

  return (<div>
            HeLLO
            {isMe &&
              <Counter key="me" name="me" />
            }
            {!isMe &&
              <Counter key="other" person="someone" />
            }
            <button onClick={() => setIsMe(!isMe)}>
              SWITCH
            </button>
        </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    HIHI<br></br>
    <Abc/>
  </div>
);