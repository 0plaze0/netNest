import { Header, Footer } from "./../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app__layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
