import Info from "./prop";
import data from "./data";
import { useState } from "react";

function App() {

    const [counter,setCounter] = useState(1);

    const handleUp = (x) => {
      if(x === 4) {
        return 4 
      } else{
        return x += 1
      }
    }

    const handleDown = (x) => {
      if(x === 1){
        return 1
      } else{
        return x-=1
      }
    }

    const handleRnd = () => {
      return Math.floor(Math.random() * 4) + 1

    }
 
  return (
    <div className="main-container">
      <div className="title-container">
        <div className="title">Our Reviews</div>
        <div className="underline"></div>
      </div>
      <div className="card">

        {data().map(

          function(item){
            if(item.id === counter) return <Info item={item}/>
          }
        )}

        <div className="downCard">
          <div className="leftRight-btn">
            <button className="btn" onClick={() => {

              setCounter(handleDown(counter))

            }}> &lt; </button>
            <button className="suprise" onClick={() => {

                setCounter(handleRnd())


            }}>Suprise Me</button>
            <button className="btn" onClick={() =>{

              setCounter(handleUp(counter))
              
            }}> &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
