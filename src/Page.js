import { useEffect } from "react";
import { useState } from "react";
import PageFullText from "./PageFullText";
import PageLink from "./PageLink";

export default function Page(props) {
  const [mainPage, setMainPage] = useState([]);
  const pageId = "59ea5578fad4770f3bb0df1c";

  useEffect(() => {
    fetch(props.apiUrl + "pages/" + pageId)
      .then((response) => response.json())
      .then((response) => {
        setMainPage(response);
      });
  }, []);

  return (
    <section id="banner">
      {!props.fullPageOnly && (
        <PageLink handleFullPage={props.handleFullPage} page={mainPage} />
      )}
      {props.fullPageOnly && (
        <PageFullText handleFullPage={props.handleFullPage} page={mainPage} />
      )}
    </section>
  );
}
