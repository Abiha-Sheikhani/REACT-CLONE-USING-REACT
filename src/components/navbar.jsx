import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { CiLight } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaGithub } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <li>
          <CiLight />
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
