import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../app.css"
import reactLogo from "../assets/react.svg";
import Btn from "../utilities/btn";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs"; 

const Footer = ()=>{

    return(
<>
<div className="hero d-flex flex-column align-items-center justify-content-center">
    <img src={reactLogo} alt="" className="logo"  />
    <h1 className=" text text-center " >Welcome to the
React community</h1>

    <div className="d-flex gap-3 mt-3">
        <Btn value={'Get Started'} bord={'none'} bgColor={'#3998B6'} textcolour={'white'}/>
        
        
    </div>
</div>
 <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo & Copyright */}
          <div className="col-md-3 mb-4">
           <FaMeta />

            <p className="small mb-1">Copyright © Meta Platforms, Inc</p>
            <p className="small">uwu?</p>
          </div>

          {/* Learn React */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Learn React</h6>
            <ul className="list-unstyled">
              <li>Quick Start</li>
              <li>Installation</li>
              <li>Describing the UI</li>
              <li>Adding Interactivity</li>
              <li>Managing State</li>
              <li>Escape Hatches</li>
            </ul>
          </div>

          {/* API Reference */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">API Reference</h6>
            <ul className="list-unstyled">
              <li>React APIs</li>
              <li>React DOM APIs</li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Community</h6>
            <ul className="list-unstyled">
              <li>Code of Conduct</li>
              <li>Meet the Team</li>
              <li>Docs Contributors</li>
              <li>Acknowledgements</li>
            </ul>
          </div>

          {/* More */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">More</h6>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>React Native</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
            <div className="d-flex gap-3 mt-2">
              <FaFacebookF size={20} />
              <FaTwitter size={20} />
              <BsInstagram size={20} />
              <FaGithub size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
</>
    )
}

export default Footer




