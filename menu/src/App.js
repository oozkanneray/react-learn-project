import { useEffect, useState } from "react";
import MenuCard from "./prop";
import data from "./data";

function App() {
  const [menuData, setMenuData] = useState(data());
  const [menu, setMenu] = useState("all");
  const [show, setShow] = useState();

  useEffect(() => {
    if (menu == "all") {
      setShow(menuData.map((item) => <MenuCard key={item.id} item={item} />));
    } else {
      setShow(
        menuData.map(
          (item) =>
            item.category == menu && <MenuCard key={item.id} item={item} />
        )
      );
    }
    console.log(menu);
  }, [menu, menuData]);

  const changeMenu = (value) => {
    setMenu(value);
  };

  return (
    <div className="main-container">
      <div className="top">
        <div className="title-container">
          <p className="title">Our Menu</p>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            onClick={() => {
              changeMenu("all");
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              changeMenu("breakfast");
            }}
          >
            Breakfast
          </button>

          <button
            onClick={() => {
              changeMenu("lunch");
            }}
          >
            Lunch
          </button>

          <button
            onClick={() => {
              changeMenu("shakes");
            }}
          >
            Shakes
          </button>
        </div>
      </div>

      <div className="menu-container">{show}</div>
    </div>
  );
}

export default App;
