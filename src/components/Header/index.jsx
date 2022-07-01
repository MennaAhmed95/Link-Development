import { useState } from "react";
import SideDrawer from "../SideDrawer";
import ToggleButton from "../ToggleButton";
import logo from "./../../assets/images/logo.png";
const Header = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);
  const backdropClickHandler = () => setSideDrawerOpen(false);

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <div className="backdrop" onClick={backdropClickHandler} />;
  }
  return (
    <>
      <header className="toolbar ">
        <nav className="toolbar__navigation contain">
          <div className="toolbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <button>Sign up</button>
              </li>
            </ul>
          </div>
          <div className="toolbar__toggle-button">
            <ToggleButton click={drawerToggleClickHandler} />
          </div>
        </nav>
      </header>
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
    </>
  );
};

export default Header;
