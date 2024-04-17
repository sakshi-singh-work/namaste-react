import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="navBarContainer">
      <div className="navBar">
        <img
          className="img"
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239825.png"
        />
        <div className="navBarItems">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <button
            onClick={() =>
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
            }
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
