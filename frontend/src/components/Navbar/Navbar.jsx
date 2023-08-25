import  { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import "../css/Navbar.css";
import logo from '../images/logo.jpg'
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <nav>
        <h2 className="brand">
          <img src={logo} alt="logo" />
          <Link className="link" to={"/"}>
            Bimch.
          </Link>
        </h2>
        <ul className={mobile ? "navListActive" : "navList"}>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/profile"}>
              Profile
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/activeUsers"}>
              Active Users
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/register"}>
              Register
            </Link>
          </li>
         
          <button className="btn">
            <Link className="link-btn" to={"/login"}>
              Log In
            </Link>
          </button>
        </ul>
        <div
          className="icons"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? (
            <CgClose className="close" />
          ) : (
            <CgMenuGridO className="open" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
