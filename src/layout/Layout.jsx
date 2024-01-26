import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from ".././components/Footer";
import StyledBg from "./StyledBg";

export default function Layout() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Outlet />
        <StyledBg />
      </main>
      <Footer />
    </div>
  );
}
