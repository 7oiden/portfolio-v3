import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StyledBg from "./StyledBg";
import PageScroll from "../components/common/PageScroll";

export default function Layout() {
  return (
    <>
      <div className="page-wrapper"></div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StyledBg />
      <PageScroll />
    </>
  );
}
