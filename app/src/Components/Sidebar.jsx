import React, { useRef, useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isClosing, setIsClosing] = useState(false); // is the sidebar extended

  const navigate = useNavigate(); // nav hook

  // adjusting time for menu closing for the animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleSidebar();
      setIsClosing(false);
    }, 700);
  };

  // handle to change background color for the main navigation
  const handleMain = () => {
    const mainDrop = document.querySelector(".mainDrop");
    const pageElements = document.getElementById("pageElements");

    if (window.location.pathname.includes("/Portfolio")) {
      pageElements.style.opacity = 0;
    } 

    if (window.location.pathname.includes("/Projects")) {
      pageElements.style.opacity = 0;
    } 

    mainDrop.style.opacity = 1;

    handleClose();

    setTimeout(() => {
      navigate("/Main");
    }, 700);
  };

  // handle to change background color for the portfolio navigation
  const handlePortfolio = () => {
    const portfolioDrop = document.querySelector(".portfolioDrop");
    const pageElements = document.getElementById("pageElements");

    if (window.location.pathname.includes("/Main")) {
      pageElements.style.opacity = 0;
    } 

    if (window.location.pathname.includes("/Projects")) {
      pageElements.style.opacity = 0;
    } 

    portfolioDrop.style.opacity = 1;

    handleClose();

    setTimeout(() => {
      navigate("/Portfolio");
    }, 700);
  };

  // handle to change background color for the project navigation
  const handleProjects = () => {
    const projectsDrop = document.querySelector(".projectsDrop");
    const pageElements = document.getElementById("pageElements");

    if (window.location.pathname.includes("/Main")) {
      pageElements.style.opacity = 0;
    } 

    if (window.location.pathname.includes("/Portfolio")) {
      pageElements.style.opacity = 0;
    } 

    projectsDrop.style.opacity = 1;

    handleClose();

    setTimeout(() => {
      navigate("/Projects");
    }, 700);
  };

  return (
    <>
      {isOpen && (
        <>
          {/* backdrop for menu */}
          <div id="backdrop" className={`backdrop ${isClosing ? "closing2" : ""}`} onClick={handleClose}>

            {/* the sidebar box */}
            <div id="sidebar" className={`sidebarAni w-1/5 h-screen flex flex-col top-0 left-0 ${isClosing ? "closing" : ""}`}>

              {/* sidebar closing tab */}
              <div id="close" className="h-14 w-full flex justify-end items-center p-1 pr-3 bg-black">
                <svg id="closeSVG" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.55 60.7">
                  <g id="Icons">
                    <polygon className="cls-3" points="33.88 30.38 60.5 57 57 60.5 30.38 33.88 3.55 60.7 .05 57.2 26.88 30.38 0 3.5 3.5 0 30.38 26.88 57.05 .2 60.55 3.7 33.88 30.38"/>
                  </g>
                </svg>
              </div>

              {/* sidebar button's wrapper */}
              <div id="sideBox" className=" gap-2 grow flex flex-col items-start justify-center bg-white font-thin text-5xl overflow-hidden">

                <button className=" btn w-full h-24 relative sideElementAni" >
                  <button className="p-4 h-24 w-full text-left relative" onClick={handleMain}>Main</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>

                <button className=" btn w-full h-24 relative sideElementAni" >
                  <button className="p-4 h-24 w-full text-left relative" onClick={handlePortfolio}>Portfolio</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>

                <button className=" btn w-full h-24 relative sideElementAni" >
                  <button className="p-4 h-24 w-full text-left relative" onClick={handleProjects}>Projects</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>

              </div>
              {/* */}

            </div>
            {/* */}

          </div>
          {/* */}
        </>
      )}
    </>
  );
};

export default Sidebar;