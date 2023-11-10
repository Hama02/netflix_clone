import { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
