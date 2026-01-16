import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/fourth.png";
import "../app.css";

const Fourth = () => {
    return (
        <>
            <div className="bg d-flex justify-content-center align-items-center flex-column pb-5">
                <div className="heading mt-5 pt-3">
                    <h1 className=" text text-center  pt-5">
                        Add interactivity wherever you need it
                    </h1>
                </div>
                <div className="text2">
                    <p className=" pt-3 pb-5 text-center">
                        React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.
                    </p>
                    <img className="img-fluid img px-3 pb-5" src={pic} alt="" />
                </div>
                <div className="text2">
                    <p className="  pb-3 text-center">
                        You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.
                    </p>
                    
                </div>
                <button className="px-4 py-2 mb-5" style={{backgroundColor:'#FDFDFE', borderRadius:'15px', border:"1px solid gray"}}> {'</>'} Add React to your Page {'>'}</button>
            </div>
        </>
    );
};

export default Fourth;
