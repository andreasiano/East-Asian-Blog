import Home from "./pages/home/Home";
import Yokai from "./pages/yokai/Yokai";
import Footer from "./components/footer/Footer";
import Forest_Therapy from "./pages/forest_therapy/Forest_Therapy";
import JingPing from "./pages/jingping/JingPing";
import Feng from "./pages/feng/Feng";
import Japan20s from "./pages/japan20s/Japan20s";
import Ricci from "./pages/ricci/Ricci";
import Taiwan_Temples from "./pages/taiwan_temples/Taiwan_Temples";
import Manners from "./pages/Manners/Manners";
import China from "./pages/china/China";
import Japan from "./pages/japan/Japan";
import Korea from "./pages/korea/Korea";
import Taiwan from "./pages/taiwan/Taiwan";
import Topbar_2 from "./components/topbar_2/Topbar_2";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop/>
          <Topbar_2 />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/china" element={<China />} />
            <Route path="/japan" element={<Japan />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/taiwan" element={<Taiwan />} />
            <Route path="/feng" element={<Feng />} />
            <Route path="/taiwan_temples" element={<Taiwan_Temples />} />
            <Route path="/Manners" element={<Manners />} />
            <Route path="/yokai" element={<Yokai />} />
            <Route path="/japan20s" element={<Japan20s />} />
            <Route path="/forest_therapy" element={<Forest_Therapy />} />
            <Route path="/jingping" element={<JingPing />} />
            <Route path="/ricci" element={<Ricci />} />
          </Routes>
          <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
