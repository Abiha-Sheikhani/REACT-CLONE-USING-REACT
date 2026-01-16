import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/third.png";
import "../app.css";

const images = [
 "../assets/third.png",
 "../assets/five.png",
 "../assets/fourth.png",
 "../assets/six.png"
];

const eight = () => {
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
             <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...images, ...images].map((src, i) => (
          <div className="marquee-item" key={i}>
            <img src={src} alt="event" />
          </div>
        ))}
      </div>
    </div>
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

export default eight;
