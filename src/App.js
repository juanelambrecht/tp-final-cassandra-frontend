import { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import SearchResult from "./SearchResult";
import SearchBox from "./SearchBox";
import Menu from "./Menu";
import Posts from "./Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const pageId = process.env.REACT_APP_MAIN_PAGE_ID;
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(results) {
    setSearchResults(results);
  }

  return (
    <Router>
      <Layout
        left={
          <>
            <MainHeader />
            <Switch>
              <Route exact path={["/", "/page/full"]}>
                <MainContent apiUrl={apiUrl} pageId={pageId} />
              </Route>
              <Route exact path="/posts/:postId">
                <Posts apiUrl={apiUrl} />
              </Route>
              <Route exact path="/posts/author/:name">
                <Posts apiUrl={apiUrl} />
              </Route>
              <Route exact path="/search/result">
                <SearchResult posts={searchResults} />
              </Route>
            </Switch>
          </>
        }
        right={
          <>
            <SearchBox apiUrl={apiUrl} handleSearch={handleSearch} />
            <Menu apiUrl={apiUrl} />
          </>
        }
      ></Layout>
    </Router>
  );
}
