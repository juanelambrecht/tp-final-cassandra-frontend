import { Link } from "react-router-dom";
import ByAuthor from "./ByAuthor";

export default function Menu(props) {
  return (
    <nav id="menu">
      <header className="major">
        <h2>Menu</h2>
      </header>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li></li>
      </ul>
      <ByAuthor apiUrl={props.apiUrl} />
    </nav>
  );
}
