// import './App.css'
import "./sass/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Background from "./pages/Background";
import About from "./pages/About";
import { ScrollToTop } from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/background" element={<Background />} />
            <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
