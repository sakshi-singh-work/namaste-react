import { useState } from "react";

const Header = () => {
  const[btnText,setBtnText] =useState('Login')
  
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <img
          className="img"
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239825.png"
        />
        <div className="navBarItems">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <button onClick={()=>btnText==="Login"?setBtnText("Logout"):setBtnText("Login")}>{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;