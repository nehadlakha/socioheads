import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <>
            <section className="footer">
                <section className="footer1">
                    <img src={require("../images/logo-removebg-preview.png")} />
                    <p>Socioheads is a digital marketing agency based in New Delhi that offers a wide range of digital marketing services to businesses. With a team of young, enthusiastic, and creative professionals, we provide services such as social media management, graphic designing, video editing, SEO, and more. Whether it's developing effective marketing strategies, creating visually appealing graphics, or optimizing websites for search engines, Socioheads has the expertise and creativity to take your business to the next level.</p>
                </section>
                <section className="footer2">
                    <div className="connect">
                        <h2>Connect with us</h2>
                        <div className="sm-footer">
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter />
                        </div>
                    </div>
                    <div className="touch">
                        <h2>Get in touch</h2>
                        <div>
                            <FaMailBulk />
                            <h5>Contact us</h5>
                            <Link to="/contact"><h5 className="here">here</h5></Link>
                        </div>
                    </div>
                    <div className="write">
                        <h2>Write to us</h2>
                        <h5>info@socioheads.com</h5>
                    </div>
                </section>
                <section className="footer3">
                    <h2>Get Notified</h2>
                    <h5>Get Latest NEWS & UPDATES by subscribing here. You will get all the updates on your registered email directly...</h5>
                    <div className="mail">
                        <input type="email" placeholder="email@gmail.com" />
                        <button type="submit">Subscribe</button>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Footer;