import HTMLicon from '../SVGs/HTMLIcon';
import CSSicon from '../SVGs/CSSIcon';
import JSicon from '../SVGs/JSIcon';
import Reacticon from '../SVGs/ReactIcon';
import Jqueryicon from '../SVGs/JQuery';
import Tailwindicon from '../SVGs/TailwindIcon';
import Sassicon from '../SVGs/SassIcon';
import Illustratoricon from '../SVGs/IllustratorIcon';
import Premiericon from '../SVGs/PremierIcon';
import Photoshopicon from '../SVGs/PhotoshopIcon';
import Figmaicon from '../SVGs/FigmaIcon';
import Linkdinicon from '../SVGs/LinkdINIcon';
import Instagramicon from '../SVGs/InstagramIcon';
import Facebookicon from '../SVGs/FacebookIcon';
import Githubicon from '../SVGs/Github';
import Rotatephoneicon from '../SVGs/RotatePhone';
import React, { useEffect, useRef, useState } from 'react';
import { openURLInNewWindow } from '../Constants/Constants';
import { scrollTo } from '../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import NodeJsIcon from '../SVGs/Nodejs';
import TypeScriptIcon from '../SVGs/TypeScript';
import Arrow from '../SVGs/Arrow';

const Main = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [readMoreClicked, setReadMoreClicked] = useState(false);
   const section1 = useRef();
   const section2 = useRef();
   const section3 = useRef();
   const section4 = useRef();
   const section5 = useRef();
   const section6 = useRef();
   const section7 = useRef();
   const divRef = useRef(null);
   const aboutMeBoxRef = useRef(null);
   const readMoreButton = useRef(null);
   const aboutMeTextInsideRef = useRef(null);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

  const navigate = useNavigate();

   useEffect(() => {
      // Run this effect only on the Main page
      if (isMainPage()) {
         
      }
   }, []);
   
   const copyToClipboard = () => {
      const email = 'dammirtaljanovic@gmail.com';
      navigator.clipboard.writeText(email);
   };

   //reset scrollbar to top after reload
   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
   
    const isMainPage = () => {
      const pathname = window.location.pathname;
      // Check if the pathname contains "/Main"
      const isMain = pathname.includes("/Main");
      
      if (isMain) {
         window.scrollTo(0, 0);
         
         // Remove loading element after initial loading
         setTimeout(() => {
            let loadInPage = document.getElementById("loadInPage");
            if (loadInPage) {
               loadInPage.style.display = "none";
            }
         }, 4200);
         
         setTimeout(() => {
            let pageElements = document.getElementById("pageElements");
            if (pageElements) {
               pageElements.className = "flex flex-col z-30 justify-center items-center";
               document.body.style.overflow = "visible";
               divRef.current.focus();
            }
         }, 4300);
      }
   };

   const readMore = () => {
      if (readMoreClicked) {
         aboutMeBoxRef.current.style.height = "75%";
         aboutMeBoxRef.current.style.width = "65%";
         readMoreButton.current.innerHTML = "Read more...";
         aboutMeTextInsideRef.current.style.overflow = "hidden";
      } else {
         aboutMeBoxRef.current.style.height = "90%";
         aboutMeBoxRef.current.style.width = "80%";
         readMoreButton.current.innerHTML = "go back";
         aboutMeTextInsideRef.current.style.overflowY = "scroll";
      }
      // Toggle the state
      setReadMoreClicked(!readMoreClicked);
   }

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
  
      setTimeout(() => {
        navigate("/Portfolio");
      }, 700);
    };

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
  
      setTimeout(() => {
        navigate("/Projects");
      }, 700);
    };
    
   return (
          <div id="wholePage" className=" h-full w-full z-30">
            <div id='mediaForPotrait'><Rotatephoneicon /></div>
          <div id='allItems1'>
          <div className="mainDrop"></div>
          <div className='portfolioDrop' ></div>
          <div className='projectsDrop' ></div>
         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div id="loadInPage" className=" h-full w-full flex justify-center items-center z-30 fixed" >
           <svg id="mainLogoSVG" className=" z-30" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
             <g id="Icons">
               <path class="cls-1" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
             </g>
           </svg>
         </div>
         <div id="pageElements" className="pageElements hidden h-full w-full ">
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
               </svg>
            </div>
            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               <div id="logoTop" className=""></div>
               
               <div ref={section1} id="welcomePage" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none'>Welcome to my website</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section2)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none'>
                         <span className=' text-3xl'>more info</span>
                         <Arrow />
                      </button>
                  </div>
               </div>
                    
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' h-28 w-full'></div>
                  <div className='  elementHeight w-full flex justify-center items-center select-none'>
                     <div ref={aboutMeBoxRef} id='aboutMeBox'>
                        <div id='aboutMeTopText' className=' h-1/6 flex items-center p-10 font-normal'> About me</div>
                        <div ref={aboutMeTextInsideRef} id='aboutMeTextInside' className=' h-4/5 w-full fontSizePages font-light overflow-hidden text-ellipsis p-3 select-text'> 
                        <span className=' font-medium text-3xl'>-M</span>y name is Damir, and I'm 20 years old. I was born in Sarajevo and have lived there ever since.
                        <br />
                        <br />
                        Currently, I'm a student seeking to broaden my real-life experiences beyond my academic education. I aim to apply my skills and knowledge where they can be most beneficial. My educational background includes electrical engineering with a focus on energy (high school), and I'm currently pursuing a degree in Nutrition at the Faculty of Agriculture and Food Science. Additionally, I'm enrolled in an IT Academy program to become a Frontend React developer.
                        <br />
                        <br />
                        Although I lack prior professional experience, I'm exclusively interested in the IT industry, where I excel. I'm proficient in frontend development and am progressively delving into backend development to become a full-stack developer. The skills I've acquired have been quickly mastered due to the dedication and countless hours I've devoted to learning.
                        <br />
                        <br />
                        I'm known for my strong work ethic and determination to achieve any goals I set for myself. My interests revolve around continuous self-improvement, encompassing various facets of life. I'm passionate about learning new things daily, not only within my areas of interest but also in broader aspects that expand my worldview. Additionally, I prioritize maintaining both mental and physical health, believing that a healthy mind requires a strong body.
                      
                        My core beliefs center on hard work, authenticity, and perseverance. I firmly believe that these principles are integral to achieving success and happiness in life.
                        <br />
                        <br />
                        My immediate goal is to join a company that recognizes my potential in programming and values my work ethic and dedication.
                        </div>
                        <div id='readMoreButton' className=' grow flex justify-end items-center text-2xl font-normal p-2 pr-8'><span ref={readMoreButton} className=' cursor-pointer hover:underline' onClick={readMore}>Read more...</span></div>
                     </div>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section3)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <Arrow />
                      </button>
                  </div>
               </div>

               <div ref={section3} id="lookingFor" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div className='  elementHeight w-full flex justify-center items-center select-none'>
                     <div className=' h-4/5 w-4/5 flex justify-between items-center flex-col gap-4'>
                        <div id='lookingForTextTop' className=' text-6xl'>What i am looking for</div>
                        <div id='lookingForBox' className=' fontSizePages font-light flex flex-col overflow-hidden'>
                           <span id='lookingForTextBottom' className=' h-full'>
                             <span className=' font-medium text-3xl'>-A</span>
                             s mentioned earlier, I am seeking a company that acknowledges my programming potential and appreciates my work ethic and dedication. I am not pursuing extravagant benefits or an unrealistic salary for a junior programmer. At present, I am content with the opportunity to work alongside industrious and knowledgeable individuals in the field, from whom I can learn and grow.
                             <br/>
                             <br/>
                             While I am open to exploring other areas within IT, my primary preference lies in leveraging my strengths in Frontend development, where I excel.
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section4)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section4} id="skills1" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div className='  elementHeight w-full flex justify-center items-center flex-col select-none'>
                     <span id='skillTextBox'>
                        <div id='skillsTextTop1' className=' text-8xl pl-4'>Skills</div>
                        <div id='skillLine1'></div>
                     </span>
                     <span id='skillBox'>
                       <div className='gridItem'>
                         <HTMLicon />
                         HTML
                       </div>
                       <div className='gridItem'>
                         <CSSicon />
                         CSS
                       </div>
                       <div className='gridItem'>
                        <JSicon />
                        JavaScript
                       </div>
                       <div className='gridItem'>
                        <Reacticon />
                        ReactJS
                       </div>
                       <div className='gridItem'>
                        <Jqueryicon />
                        JQuery
                       </div>
                       <div className='gridItem'>
                        <Tailwindicon />
                        Tailwind CSS
                       </div>
                       <div className='gridItem'>
                        <Sassicon />
                        SASS  
                       </div>
                       <div className='gridItem'>
                        <NodeJsIcon />
                        Node.JS
                       </div>
                       <div className='gridItem'>
                        <TypeScriptIcon />
                        TypeScript
                       </div>
                     </span>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section5)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section5} id="skills2" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div className='  elementHeight w-full flex justify-center items-center select-none flex-col text-2xl'>
                     <div id='skillBox2Top'>
                        <div id='skillBox2Text' className=' select-text font-light'>
                          <span className=' font-normal text-4xl'>B</span>esides the skills i have in Frontend devlopment i am also skilled in a  variety of programs used to design  and   sketch out projects and videos used  for development. I have named all of the programs i am  comftarble with  
                          using  but if it is needed i dont think that  there would be a problem for me to  start using  any other program aswell.
                        </div>
                     </div>
                     <div id='skillBox2Bottom'>
                        <div id='skills2items'>
                           <div className=' h-full w-full itm2'>
                            <div className='gridItem justify-center text-center'>
                             <Illustratoricon />
                             <span className=' h-1/5'>Adobe <br /> Illustrator</span>
                            </div>
                           </div>
            
                         <div className=' h-full w-full itm2'>
                          <div className='gridItem justify-center text-center'>
                           <Premiericon />
                           <span className=' h-1/5'>Adobe <br /> Premier</span>
                          </div>
                         </div>
                     
                         <div className=' h-full w-full itm2'>
                          <div className='gridItem justify-center text-center'>
                           <Photoshopicon />
                           <span className=' h-1/5'>Adobe <br /> Photoshop</span>
                          </div>
                         </div>
                         
                         <div className=' h-full w-full itm2'>
                          <div className='gridItem justify-center text-center'>
                           <Figmaicon />
                           <span className=' h-1/5'>Figma</span>
                          </div>
                         </div>
                         
                        </div>
                     </div>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section6)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section6} id="socials" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div id='socialMiddleAll' className='  elementHeight w-full flex justify-center items-center select-none flex-col'>
                     <div id='topSocial' className=' w-full h-1/3 flex justify-center items-center flex-col gap-2'>
                        <span>Social Links</span>
                        <div id='socialLine'></div>
                     </div>
                     <div id='middleSocial' className=' w-full h-1/3 flex justify-center'>
                        <div id='boxForSocial' className=' w-3/5 h-full flex justify-around items-center text-3xl text-center'>
                          <span className=' flex justify-center items-center flex-col gap-2' onClick={() => openURLInNewWindow("https://www.linkedin.com/in/damir-taljanovic-2813b02ab/")}>
                           <Linkdinicon />
                           LinkedIN
                          </span>
                          <span className=' flex justify-center items-center flex-col gap-2' onClick={() => openURLInNewWindow("https://www.instagram.com/damir.taljanovic/?hl=en")}>
                           <Instagramicon />
                           Instagram
                          </span>
                          <span className=' flex justify-center items-center flex-col gap-2' onClick={() => openURLInNewWindow("https://www.facebook.com/damir.taljanovic/?locale=bs_BA")}>
                           <Facebookicon />
                           Facebook
                          </span>
                          <span className=' flex justify-center items-center flex-col gap-2' onClick={() => openURLInNewWindow("https://github.com/DTIGitOne")}>
                           <Githubicon />
                           Github
                          </span>
                        </div>
                        </div>
                     <div id='bottomSocial' className=' w-full h-1/3 flex justify-center items-center flex-col text-5xl font-thin gap-3'>
                        Contact Mail:
                        <span id='emailtextSocial' className=' flex flex-col items-center text-3xl font-normal gap-1 cursor-pointer select-text' onClick={copyToClipboard}>
                           dammirtaljanovic@gmail.com
                           <span id='clickToCopyText' className=' text-2xl font-extralight select-none'>Click to copy</span>
                        </span>
                        <span id='emailtextSocialMobile' className=' flex flex-col items-center text-3xl font-normal gap-1 cursor-pointer select-text'>
                           dammirtaljanovic@gmail.com
                        </span>
                     </div>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section7)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section7} id="thankVisiting" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div className='  elementHeight w-full flex justify-center items-center select-none flex-col'>
                     <div id='thankYouText' className=' w-full h-1/3 flex justify-center items-center flex-col gap-2'>
                        <span>Thank you for visiting</span>
                        <div id='socialLine'></div>
                     </div>
                     <div className=' w-full h-2/3 flex flex-col items-center font-thin text-5xl gap-10'>
                        Also check out:
                        <span className=' text-4xl flex justify-center items-center flex-col gap-4'>
                           <div className=' font-light cursor-pointer' onClick={handlePortfolio}>My Portfolio</div>
                           &
                           <div className=' font-light cursor-pointer' onClick={handleProjects}>My Projects</div>
                        </span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
          </div>
       </div>
);

}

export default Main;