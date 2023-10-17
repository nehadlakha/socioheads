import React from "react";
import Navbar from "./Navbar";
import "../styles/services.css";
import Footer from "./Footer"
import { RiBrush4Fill } from 'react-icons/ri'
import { FaCameraRetro, FaBullhorn, FaGlobeAmericas, FaPencilAlt } from 'react-icons/fa'
import { IoMdApps } from 'react-icons/io'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'
// import { LiaGlobeAmericasSolid } from 'react-icons/lib'

const Services = () => {

    return (
        <>
            <Navbar />
            <section className="ser1">
                <h1>OUR SERVICES</h1>
                <p>We’ve got everything you need to launch and grow your business...</p>
            </section>
            <section className="ser2">
                <div className="ser2-1"></div>
                <div className="ser2-2">
                    <div className="service1">
                        <h3><RiBrush4Fill /> Social Media Management</h3>
                        <p>Socioheads offers social media management services to help businesses optimize their social media profiles and create engaging content. We handle everything from content creation to performance analysis and audience engagement. Our goal is to help businesses achieve their objectives by building a strong online presence and connecting with their target audience through social media. With our social media management service, businesses can focus on running their operations while we take care of their social media needs.</p>
                    </div>
                    <div className="service2">
                        <h3><FaCameraRetro /> Photography</h3>
                        <p>Socioheads offers professional photography services that enable businesses to showcase their products, services, and brand in a visually appealing and engaging manner. Our team of experienced photographers uses high-quality equipment and techniques to capture images that effectively communicate a business's message and values. With our photography service, businesses can enhance their marketing collateral, attract more customers, and build a strong brand image, ultimately helping them achieve their business goals and stand out in their industry.</p>
                    </div>
                    <div className="service3">
                        <h3><FaBullhorn /> Marketing Consultancy</h3>
                        <p>Socioheads provides marketing consultancy services that help businesses develop effective marketing strategies, enhance their brand image, and achieve their business goals. Our team of experienced marketing consultants conducts market research, analyzes industry trends, and develops customized marketing plans that align with our clients' objectives and budget. With our marketing consultancy service, businesses can leverage our expertise to improve their marketing ROI, increase their brand awareness, and outperform their competitors, ultimately growing their business and achieving long-term success.</p>
                    </div>
                    <div className="service4">
                        <h3><FaGlobeAmericas /> SEO</h3>
                        <p>Socioheads offers SEO services that help businesses increase their visibility and rankings on search engines. Our team of SEO experts conducts thorough keyword research, creates high-quality content, and optimizes websites for search engines, ensuring that businesses appear at the top of search engine results pages (SERPs) for relevant keywords. With our SEO service, businesses can attract more organic traffic, generate leads, and increase conversions, ultimately helping them achieve their business objectives and stay ahead of the competition.</p>
                    </div>
                    <div className="service5">
                        <h3><CgWebsite /> E-Commerce</h3>
                        <p>We provide innovative e-commerce services dedicated to redefine the online shopping experience.  Our mission is to connect consumers with a diverse range of high-quality products while delivering exceptional value and convenience. With a customer-centric approach, we prioritize user satisfaction through user-friendly interfaces, efficient logistics, and personalized recommendations. Our commitment to sustainability drives our efforts to reduce our environmental footprint, and we constantly strive to improve and adapt to meet the evolving needs and expectations of our customers.</p>
                    </div>
                    <div className="service6">
                        <h3><IoMdApps /> Web Development</h3>
                        <p>Socioheads offers web development services that help businesses create professional and functional websites that effectively represent their brand and engage their target audience. Our team of experienced web developers creates custom websites that are optimized for search engines, mobile-friendly, and easy to navigate, ensuring a seamless user experience. With our web development service, businesses can establish a strong online presence, drive traffic to their website, and generate leads, ultimately helping them achieve their business goals and stand out in their industry.</p>
                    </div>
                    <div className="service7">
                        <h3><FaPencilAlt /> Content Writing</h3>
                        <p>Socioheads provides content writing services that help businesses create high-quality, engaging, and optimized content for their websites, blogs, social media, and other marketing channels. Our team of experienced writers conducts thorough research, writes compelling copy, and optimizes content for search engines, ensuring that businesses effectively communicate their message and values to their target audience. With our content writing service, businesses can attract more organic traffic, generate leads, and increase conversions, ultimately helping them achieve their business goals and outperform their competitors.</p>
                    </div>
                    <div className="service8">
                        <h3><HiOutlinePhotograph /> Graphic Designing</h3>
                        <p>Socioheads offers graphics designing services that help businesses create visually appealing and engaging marketing collateral, including logos, banners, infographics, and social media graphics. Our team of experienced graphic designers uses creative techniques and advanced tools to create designs that effectively represent a business's brand, values, and message. With our graphics designing service, businesses can enhance their marketing campaigns, attract more customers, and build a strong brand image, ultimately helping them achieve their business objectives and stand out in their industry.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;