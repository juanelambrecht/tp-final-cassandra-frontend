import "./App.css";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import SearchResult from "./SearchResult";
import LeftPanel from "./LeftPanel";
import Posts from "./Posts";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const pageId = process.env.REACT_APP_MAIN_PAGE_ID;

  return (
    <Layout
      leftPane={<LeftPanel apiUrl={apiUrl} />}
      mainPane={
        <>
          <MainHeader />
          <Routes>
            <Route
              path="/posts/author/:name"
              element={<Posts apiUrl={apiUrl} />}
            />
            <Route path="/posts/:postId" element={<Posts apiUrl={apiUrl} />} />
            <Route
              path="/*"
              element={<MainContent apiUrl={apiUrl} pageId={pageId} />}
            />
            <Route path="/search/result" element={<SearchResult />} />
          </Routes>
        </>
      }
    />
  );
}
