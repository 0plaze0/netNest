import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { images } from "../../constant";
import "./Footer.scss";

const Links = [
  { id: "home", name: "home", path: "" },
  { id: "contact", name: "contact", path: "contact" },
  { id: "policy", name: "policy", path: "policy" },
  { id: "About", name: "About", path: "About" },
];
const developerLinks = [
  { id: "github", name: <FaGithub />, path: "https://github.com/0plaze0" },
  {
    id: "LinkedIn",
    name: <FaLinkedin />,
    path: "https://www.linkedin.com/in/akash-banik-2b8093253/",
  },
  { id: "twitter", name: <FaXTwitter />, path: "https://twitter.com/_plaze_" },
  {
    id: "website",
    name: <CiGlobe />,
    path: "https://akashbanikdev.netlify.app/",
  },
  ,
];

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-container">
        <div className="app__footer-logo">
          <img src={images.netNestBrand} alt="" />
        </div>

        <div className="app__footer-company">
          <p>company</p>
          <ul className="app__footer-links">
            {Links.map((item) => (
              <li key={`links-${item.id}`} className="app__flex p-text">
                <div />
                <Link to={`/${item.path}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="app__footer-developer">
          <p>Developer</p>
          <ul className="app__footer-links">
            {developerLinks.map((item) => (
              <li key={`links-${item.id}`} className="app__flex p-text">
                <div />
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="app__footer-copyright">
        <h3 className="text-center">All Right Reserved &copy; netNest.</h3>
      </div>
    </div>
  );
};

export default Footer;
