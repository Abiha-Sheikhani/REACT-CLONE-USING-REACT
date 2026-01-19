import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../app.css"
import reactLogo from "../assets/react.svg";
import Btn from "../utilities/btn";

const Hero = ()=>{

    return(
<>
<div className="hero d-flex flex-column align-items-center justify-content-center">
    <img src={reactLogo} alt="" className="logo"  />
    <h1 className=" text " >React</h1>
    <h3 className="text1 text-center mx-3">The library for web and native user interfaces</h3>
    <div className="d-flex gap-3 mt-3">
        <Btn value={'Learn React'} bord={'none'} bgColor={'#3998B6'} textcolour={'white'}/>
         <Btn value={'API Reference'} bgColor={'white'} bord={'1px solid gray'} textcolour={'black'}/>
        
    </div>
</div>
</>
    )
}

export default Hero