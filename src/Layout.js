import { useState } from "react";

export default function Layout(props) {
  const [showMenu, setShowMenu] = useState(true);

  function handleLeftMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">{props.mainPane}</div>
      </div>
      <div id="sidebar" className={!showMenu ? "inactive" : ""}>
        {props.leftPane}
        <a href="#sidebar" className="toggle" onClick={handleLeftMenu}>
          Toggle
        </a>
      </div>
    </div>
  );
}
