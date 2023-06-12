import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" exact="true" className={(navData) => (navData.isActive ? "active" : '')}>Home</NavLink></li>
          <li><NavLink to="/contact" exact="true" className={(navData) => (navData.isActive ? "active" : '')}>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  )
};

export default Navigation;
