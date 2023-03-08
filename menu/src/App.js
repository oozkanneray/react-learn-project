import { useEffect, useRef, useState } from "react";
import MenuCard from "./prop";
import data from "./data";



function App() {
    const [menuData,setMenuData] = useState(data());
    const [menu,setMenu] = useState("all")


    const changeMenu = (value) =>{
          setMenu(value)
    }

  return (
    <div className="main-container">
      <div className="title-container">
        <p className="title">Our Menu</p>
        <div className="underline"></div>
      </div>
      <div className="btn-container">

        <button onClick={() => {}}>All</button>

        <button onClick={() => {changeMenu("breakfast")}}>Breakfast</button>

        <button onClick={() => {changeMenu("lunch")}}>Lunch</button>

        <button onClick={() => {changeMenu("shakes")}}>Shakes</button>

      </div>
      <div  className="menu-container">
          {
            menuData.map(item => item.category == menu && <MenuCard item={item}/>)
          }
      </div>
    </div>
  );
}

export default App;
