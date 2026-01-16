import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/five.png";
import "../app.css";

const Fifth = () => {
  return (
    <>
      <div className="bg d-flex justify-content-center flex-column align-items-center">
        <div className="heading mt-5 pt-3">
          <h1 className=" text text-center  pt-5">
         Go full-stack
with a framework
          </h1>
        </div>
        <div className="text2">
          <p className=" pt-3 pb-5 text-center">
            React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or React Router.
          </p>
          <img className="img-fluid img px-3 pb-5" src={pic} alt="" />
        </div>
        <div className="text2">
          <p className="  pb-5 text-center">
            React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.
          </p>
        </div>
          <button className="px-4 py-2 mb-5" style={{backgroundColor:'#FDFDFE', borderRadius:'15px', border:"1px solid gray"}}> {'</>'} Get Started with a  framework. {'>'}</button>
      </div>
    </>
  );
};

export default Fifth;
