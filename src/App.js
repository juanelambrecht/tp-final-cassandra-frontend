import "./App.css";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import MainContent from "./MainContent";
import LatestPost from "./LatestPost";

export default function App() {
  return (
    <Layout
      left={
        <>
          <MainHeader />
          <MainContent />
          <LatestPost />
        </>
      }
    ></Layout>
  );
}
