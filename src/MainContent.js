import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import LatestPost from "./LatestPost";
import PageSummary from "./PageSummary";
import PageFullText from "./PageFullText";

export default function MainContent(props) {
  const [mainPage, setMainPage] = useState([]);

  useEffect(() => {
    fetch(props.apiUrl + "pages/" + props.pageId)
      .then((response) => response.json())
      .then((response) => {
        setMainPage(response);
      });
  }, []);

  return (
    <>
      <section id="banner">
        <Route exact path="/">
          <PageSummary page={mainPage} />
        </Route>
        <Route exact path="/page/full">
          <PageFullText page={mainPage} />
        </Route>
      </section>
      <Route exact path="/">
        <LatestPost apiUrl={props.apiUrl} />
      </Route>
    </>
  );
}
