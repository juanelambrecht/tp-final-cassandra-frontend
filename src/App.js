import "./App.css";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import MainPageContent from "./MainPageContent";
import SearchResult from "./SearchResult";
import Search from "./Search";
import Menu from "./Menu";
import Posts from "./Posts";

export default function App() {
  return (
    <Layout
      left={
        <>
          <MainHeader />
          <MainPageContent />
          <Posts />
          <SearchResult />
        </>
      }
      right={
        <>
          <Search />
          <Menu />
        </>
      }
    ></Layout>
  );
}

//ultimos4posts
//byauthor
//pagina-id/5f7b94460da67d816fe65169
//post-id/60dba241101b3c1b441f3cad
//posts-autor/:nombreautor
//search/mate
