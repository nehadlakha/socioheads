import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "../styles/portfolio.css";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import portfolioData from "../data/portfolio-data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard, Grid } from 'swiper/modules';
import Footer from "./Footer";


const Portfolio = () => {
    const [workmodel, setWorkModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setWorkModel(true);
    }
    return (
        <>
            <Navbar />
            <section className="work1">
                <h1>Our Work</h1>
            </section>
            <section className="work2">
                <div className={workmodel ? "workmodel open" : "workmodel"}>
                    <img src={tempimgSrc} />
                    <ImCross onClick={() => setWorkModel(false)} />
                </div>
                <div className="work2gallery">
                    {portfolioData.map((item, index) => {
                        return (
                            <div className={item.class} key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="work4">
                <video className="vid1" src={require("../images/work/laptop animation.mp4")} autoPlay muted controls="true" />
                <video className="vid2" src={require("../images/work/Comp 1_2.mp4")} autoPlay muted controls="true" />
            </section>
            <section className="work3">
                <h2>Socioheads has been honored to partner up with <span>...</span></h2>
                <Swiper slidesPerView={2}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    // mousewheel={{
                    //     enabled: true,
                    // }}
                    modules={[Grid, Pagination, Autoplay, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={require("../images/c1.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c2.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c3.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c4.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c5.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c6.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c7.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c8.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c9.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c10.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c11.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c12.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c13.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c14.jpg")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c15.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c16.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c17.png")} /></SwiperSlide>
                    <SwiperSlide><img src={require("../images/c18.jpg")} /></SwiperSlide>
                </Swiper>
            </section>
            <Footer />
        </>
    );
};

export default Portfolio;