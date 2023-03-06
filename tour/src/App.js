import { useState } from "react";
import TourReturn from "./prop";
import data from "./data.js";


function App(){
    const [tour,setTour] = useState(data())

    if(tour.length > 0){
        return(
            <dib className="main-section">
                <div className="main-title-container">
                    <p className="main-title"> Our Tours</p>
                    <div className="underline"></div>
                </div>
                <div className="tour-container">
                    {tour.map(item =>  <TourReturn tour={tour} setTour={setTour} item={item}/>)}
                </div>
            </dib>
        )
    } else{
        return(
            <div className="last">
                <div className="last-text">No Tour Left</div>
                <button className="last-btn" onClick={() =>{
                    window.location.reload(false);
                }}>Refresh</button>
            </div>
        )
    }

}


export default App;