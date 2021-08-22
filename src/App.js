import "./App.css";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import SearchResult from "./SearchResult";
import LeftPanel from "./LeftPanel";
import Posts from "./Posts";
import { Route } from "react-router-dom";

export default function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const pageId = process.env.REACT_APP_MAIN_PAGE_ID;

  return (
    <Layout
      leftPane={<LeftPanel apiUrl={apiUrl} />}
      mainPane={
        <>
          <MainHeader />
          <Route exact path="/posts/author/:name">
            <Posts apiUrl={apiUrl} />
          </Route>
          <Route exact path="/posts/:postId">
            <Posts apiUrl={apiUrl} />
          </Route>
          <Route exact path={["/", "/page/full"]}>
            <MainContent apiUrl={apiUrl} pageId={pageId} />
          </Route>
          <Route exact path="/search/result">
            <SearchResult />
          </Route>
        </>
      }
    />
  );
}
