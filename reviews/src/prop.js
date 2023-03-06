function Info(props){

    return(

        <div key={props.item.id} className="upCard">
            <img src={props.item.image}></img>
            <div className="info-container">
                <div className="name">{props.item.name}</div>
                <div className="tag"> {props.item.job} </div>
                <div className="info">{props.item.text}</div>
            </div>
        </div>

    )
}

export default Info 