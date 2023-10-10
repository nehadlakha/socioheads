import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/contact.css";
import { useState } from "react";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {

    const [fname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const baseUrl = "http://localhost:8000";

    const sendEmail = async () => {
        let dataSend = {
            fname: fname,
            email: email,
            phone: phone,
            message: message
        };


        if (dataSend.fname.length != 0 && dataSend.email.length != 0 && dataSend.phone.length != 0) {
            alert("Send Successfully!");
        }
        const res = await fetch(`${baseUrl}/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            // HANDLING ERRORS
            .then((res) => {
                console.log(res);
                if (res.status > 199 || res.status < 300) {
                    alert("Send Successfully !");
                }
            });

    };
    return (
        <>
            <Navbar />
            <section className="contact1">
                <h1>Contact Us</h1>
                <h4>Reach out for a new project or just say hello</h4>
            </section>
            <section className="contact2">
                <div className="send-message">
                    <h1>Send A Message</h1>
                    <form action="https://formspree.io/f/xdorpboe" method="POST" className="form" onSubmit={() => sendEmail()}>
                        <input type="text" name="fname" id="sendmail" className="form-control fname" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
                        <input type="email" name="email" id="sendmail" className="form-control email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="tel" id="sendmail" name="phone" className="form-control phone" placeholder="999 999 9999" pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} required />
                        <input type="text" id="sendmail" name="company" className="form-control company" placeholder="Company Name" onChange={(e) => setCompany(e.target.value)} required />
                        <textarea className="form-control message" id="sendmail" name="message" placeholder="Your Requirements" rows={4} cols={40} onChange={(e) => setMessage(e.target.value)} required />
                        <button type="submit" className="send-msg-btn button-30">Send Message</button>
                    </form>
                </div>
                <div className="get-in-touch">
                    <h1>Contact Info</h1>
                    <div className="line"></div>
                    <div>
                        <div className="visit-us">
                            <div className="icon-bg"><FaLocationArrow size={"3vw"} /></div>
                            <h3>Visit Us:</h3>
                            <p>Ingenious - The Co-Study Space,<br />
                                RZ-19A Suraj Vihar,<br />
                                Opposite NSUT North Gate,<br />
                                Dwarka Sec-3, New Delhi-110078</p>
                        </div>
                        <div className="mail-us">
                            <div className="icon-bg"><FaMailBulk size={"3vw"} /></div>
                            <h3>Mail Us:</h3>
                            <p>info@socioheads.com</p>
                        </div>
                        <div className="phone-us">
                            <div className="icon-bg"><FaPhone size={"3vw"} /></div>
                            <h3>Call Us:</h3>
                            <p>Mobile: (+91) 95552 07707</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;