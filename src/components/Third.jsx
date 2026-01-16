import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/third.png";
import "../app.css";

const Third = () => {
  return (
    <>
      <div className="bg d-flex justify-content-center flex-column">
        <div className="heading mt-5 pt-3">
          <h1 className=" text text-center  pt-5">
            Write components with code and markup
          </h1>
        </div>
        <div className="text2">
          <p className=" pt-3 pb-5 text-center">
            React components are JavaScript functions. Want to show some content
            conditionally? Use an <span className="p-1">if</span> statement.
            Displaying a list? Try array
            <span className="p-1">map()</span>. Learning React is learning
            programming.
          </p>
          <img className="img-fluid img px-3 pb-5" src={pic} alt="" />
        </div>
        <div className="text2">
          <p className="  pb-5 text-center">
            This markup syntax is called JSX. It is a JavaScript syntax
            extension popularized by React. Putting JSX markup close to related
            rendering logic makes React components easy to create, maintain, and
            delete.
          </p>
        </div>
      </div>
    </>
  );
};

export default Third;
