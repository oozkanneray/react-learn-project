import { useState } from "react"
import data from "./data"
import Desc from "./infoprop"

export default function User(props){

    const [info,setInfo] = useState(data())

    return(


        <div className="user-container">
            <div className="title">{props.item.title}</div>
            <div className="name">{props.item.name}</div>
            <div className="date">{props.item.date}</div>
            <div className="info-container">
                {info.map(item => item.name == props.name && item.desc.map(text => <Desc src={"https://www.svgrepo.com/show/352088/greater-than.svg"} text={text}/>))}
            </div>
        </div>
    )
}