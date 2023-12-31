import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import '../styles/home.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import data from "../data/work-data";
import Footer from "./Footer";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Home = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <Navbar />
            <section className="home1">
                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slide1">
                            <div className="slide1-1">
                                <h5>WELCOME TO SOCIOHEADS</h5>
                                <h1>We are a creative group
                                    who provide highly
                                    customized services to
                                    promote the growth of
                                    your businesses digitally.</h1>
                                <div className="slide1-1-btn">
                                    <Link to="/contact"><button className="start-project-btn button-30">START A PROJECT</button></Link>
                                    <Link to="/about"><button className="about-us-btn button-30" >ABOUT US</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide2">
                            <div className="slide2-1">
                                <h1>We’ve got everything you need to launch and grow your business</h1>
                                <ul>
                                    <li>Social Media Management</li>
                                    <li>Photography</li>
                                    <li>Marketing Consultancy</li>
                                    <li>SEO</li>
                                    <li>Web Development</li>
                                </ul>
                                <p>and much more ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide3">
                            <div className="slide3-1">
                                <h1>"Empowering Brands, Amplifying Reach - Your Digital Marketing Solution"</h1>
                                <Link to="/contact"><button className="contact-us button-30">CONTACT US</button></Link>
                                <div className="social-media">
                                    <a href="https://www.instagram.com/socioheads/?igshid=YmMyMTA2M2Y%3D" className="insta"><FaInstagram /></a>
                                    <a href="https://www.facebook.com/people/Socioheads/100090495594400/?mibextid=ZbWKwL" className="facebook"><FaFacebook /></a>
                                    <a href="https://www.linkedin.com/company/socioheads/" className="linkedin"><FaLinkedin /></a>
                                    <a href="https://twitter.com/socioheads" className="twitter"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section >
            <section className="home2">
                <div className="home2-1">
                    <div className="home2-11"><h1>What we do<span className="qmark">?</span></h1></div>
                    <div className="home2-12">
                        <h3>Digital.</h3>
                        <div className="green-line"></div>
                        <h5>We create super-rich experiences online!</h5>
                        <p>Socioheads is a full-scale Digital Marketing Agency based out of New Delhi, India. We mix our years of experience and knowledge to create solutions for our clients which are not only performance driven, but also creative.  We are running kick-ass digital campaigns for our clients, even as you read this!</p>
                        <Link to="/about"><h4>ABOUT US <FaArrowRight color={"blue"} fontSize={"1.1rem"} /></h4></Link>
                    </div>
                    <div className="home2-13">
                        <h3>And More Digital.</h3>
                        <div className="green-line"></div>
                        <h5>Marketing brands with care</h5>
                        <p>What is marketing if it is not performance driven?<br />
                            We create digital experiences which stick with audiences and also reach the end objective. Trust us with making your brand visible and desired, with highly focused performance marketing.</p>
                        <Link to="/services"><h4>OUR SERVICES <FaArrowRight color={"blue"} fontSize={"1.1rem"} /></h4></Link>
                    </div>
                </div>
                <div className="home2-2">
                    <div className="social-media-mkt">
                        <img src={require("../images/social-media-mkt.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Social Media Marketing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="performance-mkt">
                        <img src={require("../images/graphic-design.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Graphic Design</h3>
                            </div>
                        </div>
                    </div>
                    <div className="web-analytics">
                        <img src={require("../images/e-commerce.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>E-Commerce</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content-writing">
                        <img src={require("../images/content-writing.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Content Writing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="seo">
                        <img src={require("../images/seo.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Search Engine Optimization</h3>
                            </div>
                        </div>
                    </div>
                    <div className="web-design">
                        <img src={require("../images/web-design.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Web & Android Development</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="influencer">
                    <img src={require("../images/influencer.jpg")} />
                    <div className="overlay">
                        <div className="content">
                            <h3>Influencer Marketing</h3>
                        </div>
                    </div>
                </div>
                <div className="ads">
                    <img src={require("../images/ads.jpg")} />
                    <div className="overlay">
                        <div className="content">
                            <h3>Ads</h3>
                        </div>
                    </div>
                </div>
                <div className="youtube">
                    <img src={require("../images/youtube.jpg")} />
                    <div className="overlay">
                        <div className="content">
                            <h3>Youtube</h3>
                        </div>
                    </div>
                </div>
            </section >
            <section className="home3">
                <div className="home3-1">
                    <h1>Why Choose Us<span className="qmark">?</span></h1>
                </div>
                <div className="home3-2">
                    <div className="black-bg">
                        <Swiper spaceBetween={30}
                            centeredSlides={true}
                            keyboard={{
                                enabled: true,
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="home3-21">
                                    <div className="choose-content1">
                                        <h1>SOCIAL MEDIA, KEYWORD, RESEARCH STRATEGY, ADS, & ANALYTICS</h1>
                                        <p>Unlock the power of digital marketing and soar to new heights with Socioheads, your trusted partner in driving unparalleled success for your business</p>
                                    </div>
                                    <div className="choose-content2">
                                        <div className="strategy">
                                            <div className="outer-circle"><h1>80%</h1></div>
                                            <div className="strategy-content">
                                                <h3>STRATEGY</h3>
                                                <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                            </div>
                                        </div>
                                        <div className="audience">
                                            <div className="outer-circle"><h1>95%</h1></div>
                                            <div className="audience-content">
                                                <h3>AUDIENCE</h3>
                                                <p>Understanding your target audience is crucial to craft effective marketing campaigns</p>
                                            </div>
                                        </div>
                                        <div className="expertise">
                                            <div className="outer-circle"><h1>99%</h1></div>
                                            <div className="expertise-content">
                                                <h3>OUR EXPERTISE</h3>
                                                <p>Our team's expertise and industry knowledge empower us to provide strategic guidance, innovative solutions, and exceptional results</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="home3-22">
                                    <div className="work-recieved">
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1>
                                                {counterOn && <CountUp start={0} end={36} duration={2} delay={0} />}
                                                +
                                            </h1>
                                        </ScrollTrigger>
                                        <h4>Work Recieved</h4>
                                    </div>
                                    <div className="cup-of-coffee">
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1>
                                                {counterOn && <CountUp start={0} end={52} duration={2} delay={0} />}
                                                +
                                            </h1>
                                        </ScrollTrigger>
                                        <h4>Cup of Coffee</h4>
                                    </div>
                                    <div className="project-complete">
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1>
                                                {counterOn && <CountUp start={0} end={24} duration={2} delay={0} />}
                                                +
                                            </h1>
                                        </ScrollTrigger>
                                        <h4>Projects Completed</h4>
                                    </div>
                                    <div className="happy-clients">
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1>
                                                {counterOn && <CountUp start={0} end={33} duration={2} delay={0} />}
                                                +
                                            </h1>
                                        </ScrollTrigger>
                                        <h4>Happy Clients</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home3-23">
                                    <p>Have a project in your mind?</p>
                                    <h1>Let’s make something great together!</h1>
                                    <Link to="/contact"><h4>CONTACT US <FaArrowRight color={"blue"} fontSize={"1.1rem"} /></h4></Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="home4">
                <div className="home4-1">
                    <h1>Our Work</h1>
                    <h4>We love what we do, check out some of our works</h4>
                </div>
                <div className="home4-2">
                    <div className="home4-21">
                        <div className={model ? "model open" : "model"}>
                            <img src={tempimgSrc} />
                            <ImCross onClick={() => setModel(false)} />
                        </div>
                        <div className="gallery">
                            {data.map((item, index) => {
                                return (
                                    // <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                    //     <img src={item.imgSrc} style={{ width: '100%' }} />
                                    // </div>
                                    <div className={item.class} key={index} onClick={() => getImg(item.imgSrc)}>
                                        <img src={item.imgSrc} style={{ width: '100%' }} />
                                        <div className="work-overlay">
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="home4-3">
                    <h3>... and many more</h3>
                    <Link to="/portfolio"><h2 className="check-portfolio">Checkout our Portfolio! <FaArrowRight color={"blue"} fontSize={"1.8rem"} /></h2></Link>
                </div>
            </section>
            <section className="home5">
                <Swiper cssMode={true}
                    // navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="home5-1">
                            <h4>I  learned about SocioHeads through a friend who recommended them to me because I wanted to start my ecommerce website. They not only built the website but also generated numerous leads for me, increasing my website traffic from zero to millions. Later on, I engaged them for social media services, and they created exceptional and professional graphics and edited reels. I am very satisfied with their service and highly recommend you to contact them.</h4>
                            <div className="home5-line"></div>
                            <h5>Mayank Singh</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-2">
                            <h4>I recently engaged Socioheads for their social media marketing services, and I couldn't be happier with the results. Their team demonstrated a deep understanding of social media platforms and crafted a tailored strategy that perfectly suited my business needs.</h4>
                            <div className="home5-line"></div>
                            <h5>Vaibhav Gautam</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-3">
                            <h4>I had a fantastic experience with Socioheads! Their social media expertise truly delivered outstanding results for my business. From creative content to targeted campaigns, they exceeded my expectations. Highly recommend! #TopNotchMarketing</h4>
                            <div className="home5-line"></div>
                            <h5>Nazar Sachdeva</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-4">
                            <h4>Six months ago, I enlisted the services of Socioheads, and they exceeded my expectations. They delivered an outstanding performance, generating over 200 high-quality leads, a majority of which I successfully converted. Their proficiency in both social media marketing and web design is truly commendable.</h4>
                            <div className="home5-line"></div>
                            <h5>Jashan Khanna</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-5">
                            <h4>Perfect team with great service. They are passionate and dedicated towards their work, had a wonderful experience.</h4>
                            <div className="home5-line"></div>
                            <h5>Karsimran Kaur</h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <Footer />
        </>
    );
};

export default Home;