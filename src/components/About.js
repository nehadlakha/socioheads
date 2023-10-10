import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/about.css";

const About = () => {

    return (
        <>
            <Navbar />
            <section className="about1">
                <div className="about1-1">
                    <h1>ABOUT US</h1>
                    <div className="about-line"></div>
                    <h5>We drive digital success through strategic expertise and creative innovation.</h5>
                    <p>Socioheads provides complete digital solutions, based in Delhi, India. We are a group of young, passionate, individuals who understand the need of internet technology and work according to the latest search trends.
                        We have an expertise in search engine marketing, and optimization, reputation management and all forms of Digital Marketing.
                        Our goal is to bring your business on the right track by using all web based tools and strategies.
                    </p>
                </div>
                <div className="about1-2">
                    <img src={require("../images/about2.jpg")} />
                </div>
            </section>
            <section className="about2">
                <div className="about2-1">
                    <img src={require("../images/about1.jpg")} />
                </div>
                <div className="about2-2">
                    <h1>WHAT WE DO?</h1>
                    <div className="about-line"></div>
                    <p>At our digital marketing agency, we are dedicated to driving exceptional online success for our clients.
                        With a dynamic blend of creativity, data-driven insights, and cutting-edge technology, we craft tailored digital strategies to elevate brands and businesses.
                        Our team of seasoned professionals understands the ever-evolving digital landscape, ensuring that our clients stay ahead of the competition.
                        We are committed to fostering lasting partnerships and achieving measurable growth, making us the go-to partner for businesses seeking to thrive in the digital realm.
                    </p>
                </div>
            </section>
            <section className="about3">
                <h1>OUR CLIENTS</h1>
                <div className="about-line"></div>
                <div>
                    <img src={require("../images/c1.jpg")} />
                    <img src={require("../images/c2.jpg")} />
                    <img src={require("../images/c3.jpg")} />
                    <img src={require("../images/c4.png")} />
                    <img src={require("../images/c5.jpg")} />
                    {/* <img src={require("../images/c6.jpg")} /> */}
                    <img src={require("../images/c6.jpg")} />
                    <img src={require("../images/c7.png")} />
                    <p>and many more ...</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;