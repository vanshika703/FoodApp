import logo from "../img/hamburger.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline"

const Title = () => {
  return (
    <div className="header-logo">
      <a href="/">
        <img className="header-img" src={logo} />
      </a>
    </div>
  );
};

const Header = () => {

  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul className="list">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link>
          <li>User<span>{(isOnline? "🟢":"🔴")}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
