import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slickOne from '../assets/slickOne.png'
import slickTwo from '../assets/slickTwo.png'
import slickThree from '../assets/slickThree.png'

import './Slick.css';
import { dataDigitalBestSeller } from './Data';
import imgGirl from '../assets/defaultImage.jpg';

function Slick() {


  const data = [slickOne, slickTwo, slickThree]
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 3,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    autoplay: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {data.map((item) => (
         
            <div className="card-top">
              <img style={{height:250}}
                src={
                 
                     item
                }
              
                onError={handleErrorImage}
              />
             
          
         
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick;
