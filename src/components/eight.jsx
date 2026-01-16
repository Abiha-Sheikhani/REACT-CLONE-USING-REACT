import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic from "../assets/third.png";
import "../app.css";
import img1 from "../assets/p1.png"
import img2 from "../assets/p2.png"
import img3 from "../assets/p3.png"
import img4 from "../assets/p4.png"
import img5 from "../assets/p5.png"
import img6 from "../assets/p6.png"
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

const Eight = () => {
    return (
        <>
            <div className="bg d-flex justify-content-center flex-column">
                <div className="heading mt-5 pt-3">
                    <h1 className=" text text-center  pt-5">
                        Join a community
                        of millions
                    </h1>
                </div>
                <div className="text2">
                    <p className=" pt-3 pb-5 text-center">
                        You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.

                        People singing karaoke at React Conf
                        Sunil Pai speaking at React India
                        A hallway conversation between two people at React Conf

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
                        This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Eight;
