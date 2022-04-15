import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox(props) {
  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(props.apiUrl + "search/" + textSearch)
      .then((response) => response.json())
      .then((response) => {
        navigate("/search/result", { state: response });
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
