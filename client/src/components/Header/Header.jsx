import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "./../../constant/Index";
import "./Header.scss";

const Links = [
  { id: "home", name: "home", path: "" },
  { id: "contact", name: "contact", path: "contact" },
  { id: "policy", name: "policy", path: "policy" },
  { id: "About", name: "About", path: "About" },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div
        className="app__navbar-brand
      "
      >
        <h1>netNest.</h1>
      </div>
      <ul className="app__navbar-links">
        {Links.map((item) => (
          <li key={`links-${item.id}`} className="app__flex p-text">
            <div />
            <Link to={`/${item.path}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {Links.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.path}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
