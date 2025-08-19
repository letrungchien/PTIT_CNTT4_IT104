import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Article from "./Article";
import Main from "./Main";

const UserLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Navbar />
      <div style={{ flex: 1, display: "flex" }}>
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  );
};

export default UserLayout;
