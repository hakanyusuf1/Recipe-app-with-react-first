import { Routes, Route, PrivateRoute } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import Detail from "../pages/home/Detail";

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
