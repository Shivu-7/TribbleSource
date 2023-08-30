import React from 'react'
import styles from "./style";
import { socialMedia } from "./constants";
import { Billing, Business, DedicatedSupport, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import OtherNav from './components/OtherNav';

const AboutUs = () => (

    <div className="bg-primary w-full overflow-hidden min-h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <OtherNav />
            </div>
        </div>


        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <h2 className={styles.heading3}>
                    Let's Create Together:
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    <br />
                    We believe in the power of collaboration. When you partner with <b>Tribble Tabble</b>, you're not just getting a design service; you're getting a creative ally dedicated to your success. Whether you're a startup with a bold idea or an established brand looking for a digital transformation, we're here to breathe life into your vision.

                    Let's embark on a journey of innovation, creativity, and growth together. Contact us today to take the first step towards turning your dreams into reality.

                    <br />
                    <br />
                    <p class="text-sky-100" align="center">Our Mission:</p>

                    At Tribble Tabble, our mission is simple yet profound: to transform ideas into captivating experiences. We believe that every business has a unique story to tell, and we're here to help you tell it through thoughtfully designed visuals and user-centric experiences. Our goal is not just to create beautiful designs, but to craft solutions that resonate with your audience and drive tangible results.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </p>
            </div>
        </div>
        {/* <Clients /> */}
        <div className="w-full flex justify-between items-center md:flex-row flex-col px-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright Ⓒ 2022 TribbleTabble. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default AboutUs