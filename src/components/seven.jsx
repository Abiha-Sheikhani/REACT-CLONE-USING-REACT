import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/fourth.png";
import "../app.css";



const Seven = () => {
  return (
    <div className="bg p-5 ">
      <div className="row align-items-start g-5 py-5">
        
        {/* Left Side */}
        <div className="col-md-6 pt-5">
          <h1 className="main-heading">Upgrade when the future is ready</h1>
          <p className="desc">
            React approaches changes with care. Every React commit is tested on
            business-critical surfaces with over a billion users. Over 100,000
            React components at Meta help validate every migration strategy.
          </p>
          <p className="desc">
            The React team is always researching how to improve React. Some
            research takes years to pay off. React has a high bar for taking a
            research idea into production. Only proven approaches become a part
            of React.
          </p>

                   <button className="px-4 py-2 mb-5" style={{backgroundColor:'#FDFDFE', borderRadius:'15px', border:"1px solid gray"}}> {'</>'} Read More React news {'>'}</button>

        </div>

        {/* Right Side */}
        <div className="col-md-6 py-5">
          <p className="news-label">LATEST REACT NEWS</p>
          <div className="row g-4">
            {[
              ["Additional Vulnerabilities in RSC", "December 11, 2025"],
              ["Vulnerability in React Server Components", "December 3, 2025"],
              ["React Conf 2025 Recap", "October 16, 2025"],
              ["React Compiler v1.0", "October 7, 2025"],
            ].map((item, i) => (
              <div className="col-sm-6" key={i}>
                <div className="news-card">
                  <h5>{item[0]}</h5>
                  <p>{item[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Seven;
