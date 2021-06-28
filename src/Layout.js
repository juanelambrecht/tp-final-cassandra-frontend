import { useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";
import Search from "./Search";

export default function Layout(props) {
  const [showMenu, setShowMenu] = useState(true);

  function handleLeftMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">{props.left}</div>
      </div>
      <div id="sidebar" className={!showMenu ? "inactive" : ""}>
        <div className="inner">
          <Search />
          <Menu />
          <Contact />
          <Footer />
        </div>
        <a href="#sidebar" className="toggle" onClick={handleLeftMenu}>
          Toggle
        </a>
      </div>
    </div>
  );
}
