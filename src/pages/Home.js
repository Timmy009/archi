import React from 'react'
import { useState, useEffect } from 'react'
import menu from '../assets/menu-icon.png'
import backgroundone from '../assets/background-one.png'
import line from '../assets/line.png'
import backgroundtwo from '../assets/background-one.png'
import backgroundthree from '../assets/Airbus A380.jpg'
import backgroundfour from '../assets/airplane-sign-pencil-sketch.jpg'
import homeImg from '../assets/Aeroflot-Air-HostessForDetails.jpg'
import './Home.css'
import Slider from "react-slick";
import Slick from './Slick'
import drop from '../assets/drop-down.png'
import projectOne from '../assets/projectOne.png'
import projectTwo from '../assets/projectTwo.png'
import projectThree from '../assets/projectThree.png'
import projectFour from '../assets/projectFour.png'
import projectFive from '../assets/projectFive.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import linked from '../assets/linked.png'
import pint from '../assets/pint.png'
import rep from '../assets/rep.png'
import { Link } from "react-router-dom";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [backgroundone, backgroundtwo, backgroundthree, backgroundfour];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    // const slides = [
    //     { image: 'url_to_image1', text: 'Text for slide 1' },
    //     { image: 'url_to_image2', text: 'Text for slide 2' },
    //     { image: 'url_to_image3', text: 'Text for slide 3' },
    //   ];

    //   const Slide = ({ image, text }) => {
    //     return (
    //       <div style={{ backgroundImage: url(${image}), height: '100vh', backgroundSize: 'cover' }}>
    //         <div className="text-overlay">
    //           <h1>{text}</h1>
    //         </div>
    //       </div>
    //     );
    //   };
    //   const Slideshow = () => {
    //     const settings = {
    //       dots: true,
    //       infinite: true,
    //       speed: 500,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 3000,
    //     };

    //     return (
    //       <Slider {...settings}>
    //         {slides.map((slide, index) => (
    //           <Slide key={index} image={slide.image} text={slide.text} />
    //         ))}
    //       </Slider>
    //     );
    //   };

    const ClickableBackground = () => {
        // State to hold the current background image
        const [backgroundImage, setBackgroundImage] = useState(backgroundone);

        // Click event handler for the arrow
        const changeBackground = () => {
            setBackgroundImage(backgroundfour);
        };

        return (
            <div className="background-container">
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="background-image"
                />
                {/* Arrow for clicking */}
                <div className="arrow" onClick={changeBackground}></div>
            </div>
        );
    };
    useEffect(() => {
        // Rotate background image every 5 seconds
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (

        <div style={{ backgroundColor: '#272727', overflow: 'hidden' }} >
            <div
                style={{ backgroundColor: '#272727', flexDirection: 'row', paddingLeft: 60, paddingRight: 60, display: 'flex', justifyContent: 'space-between', marginBottom: -15, }}
            >
                <h1 style={{ color: 'white', fontSize: 25, marginTop: 30 }} >Proactive DBS</h1>
                <img src={menu} />


                <button style={{ backgroundColor: 'white', paddingLeft: 25, paddingRight: 25, borderRadius: 20, marginTop: 25, marginBottom: 10 }} >Get in Touch</button>
            </div>

            <div

                style={{
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`,
                    height: "500px",
                }}
            >
                <div >
                    <div style={{ alignItems: 'flex-start' }} >

                        <h1 style={{ textAlign: 'left', paddingTop: 200, paddingLeft: 20, color: 'white', fontSize: 50 }} >Project Title</h1>
                        <p style={{ textAlign: 'left', paddingTop: 40, paddingLeft: 20, width: 400, color: 'white' }} >Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Eligendi non quis
                            exercitationem culpa nesciunt nihil aut
                            nostrum explicabo reprehenderit optio amet ab
                            temporibus asperiores quasi cupiditate.
                            Voluptatum ducimus</p>


                    </div>

                </div>
            </div>
            <div style={{  }} >
                <div style={{ marginRight: 35, marginLeft: 35, marginTop: 40, }} >
                <hr style={{ marginBottom: 80, borderColor: '#b3a9a2' }} />
                </div>
                <div style={{backgroundColor:'#383838', display: 'flex', flexDirection: 'row', marginTop: 40, height: 800, }} >
                    <div>
                        <img style={{ height: 1000, width: 500, marginLeft:40, }} src={rep} />
                    </div>
                    <div style={{
                        marginLeft: 60, overflow: 'scroll',
                        scrollbarWidth: 'none', height: 900, marginRight:90


                    }} >
                        <h1 style={{ color: 'white', marginTop: 0, textAlign: 'justify', fontSize: 30, fontWeight: 'normal' }} >We are dedicated to addressing the evolving <span style={{ color: '#b3a9a2' }} >requirements of the world's most dynamic companies.</span></h1>
                        <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />


                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                            <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >01</h1>
                            <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi non quis
                                exercitationem culpa nesciunt nihil aut
                                nostrum explicabo reprehenderit optio amet ab
                                temporibus asperiores quasi
                                cupiditate. Voluptatum ducimus</p>

                        </div>
                        <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                            <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >02</h1>
                            <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi non quis
                                exercitationem culpa nesciunt nihil aut
                                nostrum explicabo reprehenderit optio amet ab
                                temporibus asperiores quasi
                                cupiditate. Voluptatum ducimus</p>
                        </div>
                        <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                            <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >03</h1>
                            <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi non quis
                                exercitationem culpa nesciunt nihil aut
                                nostrum explicabo reprehenderit optio amet ab
                                temporibus asperiores quasi
                                cupiditate. Voluptatum ducimus</p>
                        </div>
                        <hr style={{ marginBottom: 20, marginTop: 30, borderColor: '#b3a9a2' }} />
                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
                            <h1 style={{ textAlign: 'justify', marginRight: 100, color: 'white', marginTop: 8, fontWeight: 'normal' }} >04</h1>
                            <p style={{ textAlign: 'justify', color: 'white', fontWeight: 'normal' }} >Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi non quis
                                exercitationem culpa nesciunt nihil aut
                                nostrum explicabo reprehenderit optio amet ab
                                temporibus asperiores quasi
                                cupiditate. Voluptatum ducimus</p>
                        </div>
                        <img style={{ marginTop: 30, width: 1200, height: 600 }} src={rep} />
                    </div>

                </div>

            </div>
            <div style={{ marginTop: 300 }} >
                <h1 style={{ color: 'white', marginBottom: 40, textAlign: 'center' }} >Selected Projects</h1>
                <Slick />
            </div>
            <hr style={{ color: 'white', marginTop: 70, borderColor: '#b3a9a2' }} />

            <div style={{ marginTop: 50, marginBottom: 20 }} >
                <h1 style={{ color: 'white', marginBottom: 40, textAlign: 'center' }} >All Projects</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 40, marginRight: 60, backgroundColor: 'white', }} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%', borderRight: '1px', borderRightStyle: 'solid', borderRightColor: 'black' }} >
                        <h2 style={{ fontSize: 20, fontWeight: "normal", marginLeft: 20 }} >Project Type</h2>
                        <h2 style={{ fontSize: 20, }} >All</h2>
                        <img src={drop} style={{ width: 15, height: 15, paddingTop: 20, paddingRight: 22, marginLeft: -150, marginTop: 2 }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '22%', borderRight: '1px', borderRightStyle: 'solid', borderRightColor: 'black', marginLeft: 0 }} >
                        <h2 style={{ fontSize: 20, fontWeight: "normal", marginLeft: -40 }} >Region</h2>
                        <h2 style={{ fontSize: 20, }} >All</h2>
                        <img src={drop} style={{ width: 15, height: 15, paddingTop: 20, paddingRight: 22, marginLeft: -150, marginTop: 2 }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '22%', borderRight: '1px', borderRightStyle: 'solid', borderRightColor: 'black', marginLeft: 0 }} >
                        <h2 style={{ fontSize: 20, fontWeight: "normal", marginLeft: -40 }} >Country</h2>
                        <h2 style={{ fontSize: 20, }} >All</h2>
                        <img src={drop} style={{ width: 15, height: 15, paddingTop: 20, paddingRight: 22, marginLeft: -150, marginTop: 2 }} />

                    </div>
                    <div style={{ width: '2%', }}  >
                        <h1 style={{ fontSize: 20, fontWeight: "normal", marginLeft: -80 }} >Sort A-Z</h1>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginRight: 20, marginLeft: 35, marginTop: 40, }} >
                <div style={{ display: 'flex', flexDirection: 'column', margin: 10, width: '30%' }} >
                    <Link to="/Project">   <div>
                        <div style={{ position: 'absolute', marginTop: "22%", marginLeft: 20 }} >
                            <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                            <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                        </div>

                        <img src={projectOne} style={{ marginTop: 30, width:370 }} />
                    </div>    </Link>
                    <Link to="/Project">   <div>
                        <div style={{ position: 'absolute', marginTop: "25%", marginLeft: 20 }} >
                            <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                            <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                        </div>
                        <img src={projectTwo} style={{ marginTop: 30, width:370, height:370 }} /> </div> </Link>
                </div>

                <Link to="/Project">  <div style={{ width: '35%', marginRight:20,marginLeft:20, }} >
                    <div style={{ position: 'absolute', marginTop: "54%", marginLeft: 20 }} >
                        <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                        <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                    </div>
                    <img src={projectThree} style={{ marginTop: 30, height:740, width:370 }} />
                </div> </Link>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 0,  width: '20%' }} >
                    <Link to="/Project">  <div>   <div style={{ position: 'absolute', marginTop: "25%", marginLeft: 20 }} >
                        <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                        <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                    </div>
                        <img src={projectFour} style={{ marginTop: 30, width:370, height:370 }} /> </div>  </Link>
                    <Link to="/Project">   <div>   <div style={{ position: 'absolute', marginTop: "22%", marginLeft: 20 }} >
                        <h1 style={{ color: 'white', marginBottom: -10, fontSize: '1em' }} >Project Title</h1>
                        <p style={{ textAlign: 'left', color: 'white', fontSize: '1em' }} >Category</p>
                    </div>
                        <img src={projectFive} style={{ marginTop: 0, width:370, height:370 }} /> </div>  </Link>
                </div>
            </div>
            <div style={{ marginTop: 100 }} >
                <h1 style={{ color: 'white', fontSize: 25, textAlign: 'center' }} >PDBS</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Architecture
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Approach
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Team
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Our Process
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Blog
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Press
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Careers
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Contact
                    </p>
                    <p style={{ color: '#b3a9a2', margin: 10, fontSize: 10 }} >
                        Privacy Policy
                    </p>
                </div>

            </div>

            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }} >
                <img src={facebook} style={{ marginRight: 10, alignItems: 'center' }} />
                <img src={insta} style={{ marginRight: 10 }} />
                <img src={linked} style={{ marginRight: 10 }} />
                <img src={pint} style={{ marginRight: 10, backgroundColor: 'blue' }} />
            </div>

            <div style={{ fontSize: 10, color: '#b3a9a2', marginTop: 10, marginBottom: 100, textAlign: 'center' }} >
                &copy; OurCompany Name All rights reserved
            </div>
        </div>

    )
}

export default Home