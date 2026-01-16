import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/six.png";
import "../app.css";

const Sixth = () => {
  return (
    <>
      <div className="bg pb-5 d-flex justify-content-center flex-column align-items-center">
        <div className="heading mt-5 pt-3">
          <h1 className=" text text-center  pt-5">
            Use the best from every platform
          </h1>
        </div>
        <div className="text2">
          <p className=" pt-3 pb-5 text-center">
           People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.
          </p>
          <img className="img-fluid img px-3 pb-5" src={pic} alt="" />
        </div>
        <div className="text2">
          <p className="  pb-5 text-center">
            With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.
          </p>
        </div>
          <button className="px-4 py-2 mb-5 " style={{backgroundColor:'#FDFDFE', borderRadius:'15px', border:"1px solid gray"}}> {'</>'} Built for native platforms{'>'}</button>
      </div>
    </>
  );
};

export default Sixth;
