function MenuCard(props){
    return(
        <div className="item" key={props.item.id}>
            <div className="img-container">
                <img src={props.item.img}></img>
            </div>
            <div className="info">
                <div className="title-price">
                    <div className="menu-title">{props.item.title} </div>
                    <div className="menu-price">{props.item.price}</div>
                </div>
                <div className="description">{props.item.desc} </div>
            </div>
        </div>
    )
}

export default MenuCard