import { NavLink } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { Header, Links } from "./Navbar.styled";
export default function Navbar() {
  return (
    <Header>
      <div>
        <img src={Logo} alt="" />
      </div>

      <Links>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/"
        >
          Log Out
        </NavLink>
      </Links>
    </Header>
  );
}
