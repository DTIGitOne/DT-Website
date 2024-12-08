import Githubicon2 from "../SVGs/GithubIcon2";
import Rotatephoneicon from "../SVGs/RotatePhone";
import { useRef , useState , useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { scrollTo } from '../Constants/Constants';
import { openURLInNewWindow } from '../Constants/Constants';
import { useNavigate } from "react-router-dom";
import Arrow from "../SVGs/Arrow";
import FramerOne from "../Components/animation/FramerOne";

const Portfolio = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const section1 = useRef();
   const section2 = useRef();
   const divRef = useRef(null);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   useEffect(() => {
      // Run this effect only on the Main page
      if (isPortfolioPage()) {
         
      }
   }, []);

   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

   const isPortfolioPage = () => {
      const pathname = window.location.pathname;
     
      const isPortfolio = pathname.includes("/Portfolio");
      
      if (isPortfolio) {
         window.scrollTo(0, 0);
         
         // Remove loading element after initial loading
         setTimeout(() => {
            let loadInPage = document.getElementById("loadInPage");
            if (loadInPage) {
               loadInPage.style.display = "none";
            }
         }, 200);
         
         setTimeout(() => {
            let pageElements = document.getElementById("pageElements");
            if (pageElements) {
               pageElements.className = "flex flex-col z-30 justify-center items-center";
               document.body.style.overflow = "visible";
               divRef.current.focus();
            }
         }, 300);
      }
   };

   return (
      <div id="wholePage2" className=" h-full w-full z-30">
          <div id='mediaForPotrait'><Rotatephoneicon /></div>
         <div id="allItems2">
         <div className="mainDrop"></div>
          <div className='portfolioDrop' ></div>
          <div className='projectsDrop' ></div>
         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
         <div id="pageElements" className=" pageElements hidden h-full w-full ">
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
               </svg>
            </div>
            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               <div id="logoTop" className=""></div>
               
               <div ref={section1} id="welcomePagePortfolio" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none'>My Portfolio</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button id="goDownButton" onClick={() => scrollTo(section2)} className='flex flex-col gap-2 p-1 items-center select-none'>
                         <Arrow />
                      </button>
                  </div>
               </div>

               {/* portfolio link section */}    
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none flex flex-col'>
                     <div className=" h-1/2 w-full flex flex-col justify-center items-center">
                        <span id="PortTextBox" className=" w-full h-1/2 flex flex-col items-center justify-center gap-2">
                           <FramerOne del={0.2} dur={0.4} classes="flex justify-center items-center" position={"relative"} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                              <div id="portfolioHeadingBottom">Portfolio</div>
                           </FramerOne>
                           <div id="portfolioHeadingLine"></div>
                        </span>
                        <FramerOne del={0.2} dur={0.4} classes="flex justify-center items-center" position={"relative"} height='100%' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                           <span className=" w-full h-1/2 flex flex-col items-center justify-start text-4xl">
                              <span className=" w-auto h-auto flex flex-col items-center gap-3 cursor-pointer" onClick={() => openURLInNewWindow("https://github.com/stars/DTIGitOne/lists/portfolio")}>
                                <Githubicon2 />
                                Portfolio
                              </span>
                           </span>
                        </FramerOne>
                     </div>
                  </div>
               </div>
               {/*  */}

            </div>
         </div>
         </div>
      </div>
   );

}

export default Portfolio;