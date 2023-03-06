import { useRef, useState } from "react";
import data from "./data";

function TourReturn(props){

    const [state,setState] = useState(false)

    const mainElement = useRef();
    const btnElement = useRef()


    const changeValue = () => {
        if(state){
            mainElement.current.innerHTML = props.item.main.slice(0,props.item.main.length / 2) + "..."
            btnElement.current.innerHTML = "Show More";
            setState(false)
        }else{
            mainElement.current.innerHTML = props.item.main
            btnElement.current.innerHTML = "Show Less";
            setState(true)
        }
    }


    return(
        <div key={props.item.id} className="card-container">
            <div className="img-container">
                <img src={props.item.src}></img>
                <div className="price-container">
                    <div className="price">${props.item.price}</div>
                </div>
            </div>
                <div className="title-container">
                   <p className="title"> {props.item.title}</p>
                </div>
                <div className="main-container">
                    <p className="main" ref={mainElement}> { props.item.main.slice(0,props.item.main.length / 2)}</p>
                    <button className="show-more" ref={btnElement}  onClick={changeValue}>Show More</button>
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={() => {

                        props.setTour(props.tour.filter(item => item.id != props.item.id))

                    }}> Not Interested </button>
            </div>
        </div>
    )
}

export default TourReturn;