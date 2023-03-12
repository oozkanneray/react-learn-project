import { useEffect, useState } from "react";
import data from "./data";
import User from "./prop";

function App() {

const [person, setPerson] = useState(data())

const [name,setName] = useState("Tommy")

const [active,setActive] = useState(true);


  return (
    <div className="main-content">
      <div className="left">
        <div className="btn-container">
          <button className="btn" style={name === "Tommy" ? { borderLeft: "3px solid rgb(20, 184, 166,1)"} : null} onClick={()=> {setName("Tommy")}}>TOMMY</button>
          <button className="btn" style={name === "Bigdrop"? { borderLeft: "3px solid rgb(20, 184, 166,1)"} : null} onClick={() => {setName("Bigdrop")}}>BIGDROP</button>
          <button className="btn" style={name === "Cuker"? { borderLeft: "3px solid rgb(20, 184, 166,1)"} : null}onClick={() => {setName("Cuker")}}>CUKER</button>
        </div>
      </div>
      <div className="right">
        {person.map(item => item.name == name && <User name={name} key={item.id} item={item}/>)}
      </div>
    </div>
  );
}

export default App;
