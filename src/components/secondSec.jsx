import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/topics.png";
import "../app.css";

const Second = () => {
  return (
    <>
      <div className="bg d-flex justify-content-center flex-column">
        <div className="heading mt-5 pt-3">
          <h1 className=" text text-center  pt-5">
            Create user interfaces from components
          </h1>
        </div>
        <div className="text2">
          <p className=" pt-3 pb-5 text-center">
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like{" "}
            <span className="p-1">Thumbnail</span> ,
            <span className="p-1">LikeButton</span>, and{" "}
            <span className="p-1"> Video</span>. Then combine them into entire
            screens, pages, and apps.
          </p>
          <img className="img-fluid img px-3 pb-5" src={pic} alt="" />
        </div>
        <div className="text2">
          <p className="  pb-5 text-center">
            My video Video description Whether you work on your own or with
            thousands of other developers, using React feels the same. It is
            designed to let you seamlessly combine components written by
            independent people, teams, and organizations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Second;
