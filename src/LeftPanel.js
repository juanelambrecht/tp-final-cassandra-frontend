import Menu from "./Menu";
import SearchBox from "./SearchBox";
import Contact from "./Contact";
import License from "./License";

export default function LeftPanel(props) {
  return (
    <div className="inner">
      <SearchBox apiUrl={props.apiUrl} handleSearch={props.handleSearch} />
      <Menu apiUrl={props.apiUrl} />
      <Contact />
      <License />
    </div>
  );
}
