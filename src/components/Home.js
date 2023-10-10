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

const Home = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <Navbar />
            <section className="home1">
                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    keyboard={{
                        enabled: true,
                    }}
                    // autoplay={{
                    //     delay: 3500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
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
                                    <div className="insta"><FaInstagram /></div>
                                    <div className="facebook"><FaFacebook /></div>
                                    <div className="linkedin"><FaLinkedin /></div>
                                    <div className="twitter"><FaTwitter /></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="home2">
                <div className="home2-1">
                    <div className="home2-11"><h1>What we do<span className="qmark">?</span></h1></div>
                    <div className="home2-12">
                        <h3>Digital.</h3>
                        <div className="green-line"></div>
                        <h5>We create super-rich experiences online!</h5>
                        <p>WeBeeSocial is a full-scale Digital Marketing Agency based out of New Delhi, India. We mix our years of experience and knowledge to create solutions for our clients which are not only performance driven, but also creative.  We are running kick-ass digital campaigns for our clients, even as you read this!</p>
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
                        <img src={require("../images/performance-mkt.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Performance Marketing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="web-analytics">
                        <img src={require("../images/web-analytics.jpg")} />
                        <div className="overlay">
                            <div className="content">
                                <h3>Web Analytics</h3>
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
                                delay: 3000,
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
                                        <h1>36</h1>
                                        <h4>Work Recieved</h4>
                                    </div>
                                    <div className="cup-of-coffee">
                                        <h1>52</h1>
                                        <h4>Cup of Coffee</h4>
                                    </div>
                                    <div className="project-complete">
                                        <h1>24</h1>
                                        <h4>Projects Completed</h4>
                                    </div>
                                    <div className="happy-clients">
                                        <h1>33</h1>
                                        <h4>Happy Clients</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home3-23">
                                    <p>Have you project in mind?</p>
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
                                            <div className="work-content">
                                                <h3><AiOutlinePlus /></h3>

                                                <h5>{item.imgName}</h5>
                                                <h6>{item.purpose}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="home4-3">
                    <h3>... and many more</h3>
                    <Link to="/portfolio"><h2>Checkout our Portfolio! <FaArrowRight color={"blue"} fontSize={"1.8rem"} /></h2></Link>
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
                            <h4>With the help of SocioHeads, we are now able to send far more contextual communication to consumers essentially the right product to the right consumer at the time of the day and often using the right channel as well. Thank you.</h4>
                            <div className="home5-line"></div>
                            <h5>Arjun Reddy/ CEO, Devotional Shoppe</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-2">
                            <h4>Choosing SocioHeads was our best decision. Their team identified and shortlisted keywords for my company and within 1-2 months most of them started ranking on the first page of Google. I thank Mr Vansh and his team for generating extra revenue through Google for me. Your SEO work is commendable.</h4>
                            <div className="home5-line"></div>
                            <h5>Rajesh Kapoor</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-3">
                            <h4>We took SEO and digital services from SocioHeads and that boosted our sales. I must say Vansh and his team are very efficient and professional.</h4>
                            <div className="home5-line"></div>
                            <h5>Vikram Sharma</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-4">
                            <h4>Socioheads as the implementation partner helped us bring together the various channels of marketing into one unified journey for our prospects as well as members. So what we've achieved in the last few months has been quite amazing.</h4>
                            <div className="home5-line"></div>
                            <h5>Priya Gupta</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home5-5">
                            <h4>I approached SocioHeads to improve the online presence of my event management company. After a couple of months, my website started giving good business. Thanks to the team  of SocioHeads for constant support and efficient service.</h4>
                            <div className="home5-line"></div>
                            <h5>Rahul Patel</h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <Footer />
        </>
    );
};

export default Home;