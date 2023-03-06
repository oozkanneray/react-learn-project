import Question from "./prop";
import data from './data.js'
import { useState } from "react";


function App() {

  const [txt,setTxt] = useState(data())

  return (
    <div className="card">
      <div className="left">
        <h3 className="text">Questions And Answers About Login</h3>
      </div>
      <div className="right">
        {txt.map(item => <Question item={item}/>)}
      </div>

    </div>
  );
}

export default App;
