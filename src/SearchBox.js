import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBox(props) {
  const [textSearch, setTextSearch] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(props.apiUrl + "search/" + textSearch)
      .then((response) => response.json())
      .then((response) => {
        history.push("/search/result", response);
      });
  }

  function handleChange(e) {
    setTextSearch(e.target.value);
  }

  return (
    <section id="search" className="alt">
      <form method="get" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Search" />
      </form>
    </section>
  );
}
