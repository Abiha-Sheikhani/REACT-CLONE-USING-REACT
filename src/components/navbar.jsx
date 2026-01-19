import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaGithub } from "react-icons/fa";
import "../index.css";
import "../app.css"

const Navbar = () => {
  const [open, setOpen] = useState(false);
const [dark, setDark] = useState(false);

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  setDark(!dark);
};


  return (
    <nav>
      {/* Hamburger icon on small screens */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>

      <ul className={`navbar-items ${open ? "show" : ""} d-flex gap-5`}>
        <li>
          <img src={reactLogo} alt="" /> v 19.2
        </li>
        <li>
          <input type="text" placeholder="Search" />
        </li>
        <li>Learn</li>
        <li>Reference</li>
        <li>Community</li>
        <li>Blog</li>
       <li onClick={toggleTheme} style={{ cursor: "pointer" }}>
  {dark ? <CiLight /> : <IoMoon />}
</li>


        <li>
          <IoLanguage />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
