import Rotatephoneicon from "../SVGs/RotatePhone";
import { useRef , useState , useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { scrollTo } from '../Constants/Constants';
import CaraouselMenu from '../Components/CaraouselMenu';
import FramerOne from "../Components/animation/FramerOne";
import Arrow from "../SVGs/Arrow";

const Projects = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar state
   const section1 = useRef(); // Landing page ref
   const section2 = useRef(); // Projects ref
   const divRef = useRef(null); // ref for the elements div wrapper

   // function to toggle between states
   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   useEffect(() => {
      // Run this effect only on the Main page
      if (isProjectsPage()) {
         
      }
   }, []);

   // restore the past scroll
   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

   // toggle the animation for switching pages to change background color before navigation
   const isProjectsPage = () => {
      const pathname = window.location.pathname;
     
      const isProjects = pathname.includes("/Projects");
      
      if (isProjects) {
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
      <div id="wholePage3" className=" h-full w-full z-30">
         {/* div to show to rotate device */}
         <div id='mediaForPotrait'><Rotatephoneicon /></div>
         <div id="allItems2">
          
          {/* div used for the animation when going between pages */}
          <div className="mainDrop"></div>
          <div className='portfolioDrop'></div>
          <div className='projectsDrop'></div>
          {/* */}

         {/* Sidebar component */}
         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
         {/* */}

         <div id="pageElements" className=" pageElements hidden h-full w-full ">

            {/* button to toggle <Sidebar> */}
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                  <g id="Icons">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
                  </g>
               </svg>
            </div>
            {/* */}

            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               
               {/* Project Landing page */}
               <div ref={section1} id="welcomePageProjects" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none'>Projects</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button id="goDownButton" onClick={() => scrollTo(section2)} className='flex flex-col gap-2 p-1 items-center select-none'>
                        <Arrow />
                      </button>
                  </div>
               </div>
               {/* */}
               
               {/* Project Carausel section */}
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <FramerOne del={0.6} dur={1} position={"relative"} height="100%" var1={{opacity: 0, y: 0}} var2={{opacity: 1,y: 0}} width='100%'>
                     <div className=' elementHeight w-full flex justify-center select-none'>
                        <CaraouselMenu />
                     </div>
                  </FramerOne>
               </div>
               {/* */}

            </div>

         </div>
         </div>
      </div>
   );

}

export default Projects;