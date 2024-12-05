import '../css/container.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Projects } from '../Data/projects';
import Arrow from '../SVGs/Arrow';
import { useState } from 'react';
import FramerOne from './animation/FramerOne';
import { openURLInNewWindow } from '../Constants/Constants';
import NavArrow from '../SVGs/NavArrow';

const CaraouselMenu = () => {
  const [isHoverd, setIsHoverd] = useState(false); // if state hoverd set zoom in background

  // settings for the carusel component from Slick
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <NavArrow right={true} />,
    nextArrow: <NavArrow right={false} />,
  };

 return (
    <div className="slider-container">
      {/* Slick slider */}
      <Slider {...settings}>
         {/* mapped out projects */}
         {Projects.map((project) => {
          return (
            <div key={project.id} id="slideBox">
                <img className={`imageBackground ${isHoverd ? "hoverdImage" : "leftImage"}`} src={project.image} alt="" />
                <div id="overlayBox">
                    {/* dropdown animation for the button text */}
                    <FramerOne del={0.2} dur={0.4} classes="flex justify-center items-center" position={"relative"} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>
                        <button onClick={() => openURLInNewWindow(project.url)} id='buttonId' onMouseOver={() => setIsHoverd(true)} onMouseLeave={() => setIsHoverd(false)}>
                            {project.title}
                        </button>
                    </FramerOne>
                </div>
            </div>
          );
         })}
      </Slider>
    </div>
  );
}

export default CaraouselMenu;

