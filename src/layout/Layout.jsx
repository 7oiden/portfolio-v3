import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StyledBg from "./StyledBg";
import PageScrollBtn from "../components/common/PageScrollBtn";

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
      <PageScrollBtn />
    </>
  );
}
