export default function Desc(props){

    return(
        <div className="desc-container">
            <img src={props.src}></img>
            <p>{props.text}</p>
        </div>
    )   
}