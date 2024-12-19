import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import logoImg from "../../assets/react.svg";

function Navbar() {
  function navLinkActiveChecker({ isActive }: NavLinkRenderProps) {
    return isActive ? "navbar__link navbar__active" : "navbar__link";
  }
  return (
    <nav className="navbar">
      <div className="container navbar__nav">
        <div className="navbar__logo">
          <NavLink to="/" className="navbar__logo-link">
            <img src={logoImg} className="navbar__logo-img" alt="#" />
          </NavLink>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className={navLinkActiveChecker}>
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/create" className={navLinkActiveChecker}>
              Create
            </NavLink>
          </li>
        </ul>

        <div className="navbar__toggle">
          <span className="navbar__toggle-icon">&nbsp;</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
