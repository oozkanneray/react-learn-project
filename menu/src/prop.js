function MenuCard(props){
    return(
        <div key={props.item.id}>
            <div>{props.item.title}</div>
        </div>
    )
}

export default MenuCard