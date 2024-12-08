import Illustratoricon from '../SVGs/IllustratorIcon';
import Premiericon from '../SVGs/PremierIcon';
import Figmaicon from '../SVGs/FigmaIcon';
import Linkdinicon from '../SVGs/LinkdINIcon';
import Instagramicon from '../SVGs/InstagramIcon';
import Facebookicon from '../SVGs/FacebookIcon';
import Githubicon from '../SVGs/Github';
import Rotatephoneicon from '../SVGs/RotatePhone';
import React, { useEffect, useRef, useState } from 'react';
import { openURLInNewWindow } from '../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Blender from '../SVGs/Blender';
import { Skills } from '../Data/projects';
import SkillIcon from '../Components/smallComponents/SkillIcons';
import ScrollDown from '../Components/smallComponents/ScrollDown';
import FramerOne from '../Components/animation/FramerOne';
import { copyToClipboard } from '../js/functions';
import { body, gmail, subject } from '../js/constants';

const Main = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar state

   const section1 = useRef(); // section reference for initial first element
   const section2 = useRef(); 
   const section3 = useRef();
   const section4 = useRef();
   const section5 = useRef();
   const section6 = useRef();
   const section7 = useRef(); // ... and this is for the last element
   const divRef = useRef(null); // ref used to select the focus() on the scroll body on load

   // function for sidebar toggling
   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   // navigating hook
   const navigate = useNavigate();

   useEffect(() => {
      // Run this effect only on the Main page
      if (isMainPage()) {
         
      }
   }, []);

   //reset scrollbar to top after reload
   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
   
    // if current page is /Main then run the following: hide elements and scroll for svg draw animation
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

   // navigate to portfolio when function is triggerd
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

    // navigate to projects when function is triggerd
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

      {/* show for device rotation */}
      <div id='mediaForPotrait'><Rotatephoneicon /></div>

      {/* whole page div wrapper meant for hiding elements */}
      <div id='allItems1'>

      {/* background div's used to toggle to fade in or out depending on the page navigation */}
      <div className="mainDrop"></div>
      <div className='portfolioDrop'></div>
      <div className='projectsDrop'></div>

      {/* the side bar component meant to be triggerd by state */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* the initial drawn logo when enetering the page */}
      <div id="loadInPage" className=" h-full w-full flex justify-center items-center z-30 fixed" >
        <svg id="mainLogoSVG" className=" z-30" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
          <g id="Icons">
            <path class="cls-1" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
          </g>
        </svg>
      </div>

         {/* element wrapper meain only for the site element excluding menu */}
         <div id="pageElements" className="pageElements hidden h-full w-full ">

            {/* hard coded svg for the sidebar toggle */}
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
               </svg>
            </div>

            {/* container wrapping the elements for the scroll snap */}
            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               <div id="logoTop" className=""></div>
               
               <div ref={section1} id="welcomePage" className="full-screen-section relative flex flex-col font-thin text-white text-8xl z-30">

                  <div className=' elementHeight w-full flex justify-center items-center select-none'>Welcome to my website</div>

                  {/* down arrow to scroll to next element */}
                  <ScrollDown section={section2} />

               </div>

                    
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className='  elementHeight w-full flex flex-col justify-center items-center select-none'>

                     <FramerOne del={0.1} dur={0.75} height='auto' classes="flex justify-center items-center" classes2="flex justify-center items-center" var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>
                     <div id='aboutMeBox'>

                        <div id='aboutMeTopText' className=' h-auto flex items-center p-4 font-normal'>About me</div>

                        <div id='aboutMeTextInside' className=' w-full fontSizePages font-light overflow-hidden text-ellipsis p-4 select-text'> 
                           <span className=' font-medium text-3xl'>-M</span>y name is Damir, and I am a 20-year-old full-stack developer with a primary focus on frontend development. I have a strong passion for programming and aspire to build a successful career in the IT industry. I am eager to learn new technologies and languages required for my role, constantly striving to stay updated with the latest trends in the tech world.
                              <br />
                              <br />
                           I have completed the IT Academy program, earning certifications as a React Frontend Developer to validate my expertise. Alongside my development skills, I have some experience in web and 3D design, allowing me to channel creativity into projects and gain a deeper understanding of the industry.
                              <br />
                              <br />
                           I'm known for my strong work ethic and determination to achieve any goals I set for myself. My interests revolve around continuous self-improvement, encompassing various facets of life. I'm passionate about learning new things daily, not only within my areas of interest but also in broader aspects that expand my worldview. Additionally, I prioritize maintaining both mental and physical health, believing that a healthy mind requires a strong body.
                         
                           My core beliefs center on hard work, authenticity, and perseverance. I firmly believe that these principles are integral to achieving success and happiness in life.
                              <br />
                              <br />
                           My immediate goal is to join a company that recognizes my potential in programming and values my work ethic and dedication.
                        </div>

                     </div>
                     </FramerOne>

                     {/* down arrow to scroll to next element */}
                     <ScrollDown section={section3} />

                  </div>
               </div>


               <div ref={section3} id="lookingFor" className="full-screen-section relative flex flex-col font-thin text-white text-8xl z-30">

                  <div className='elementHeight w-full flex justify-center items-center select-none'>
                  <FramerOne del={0.4} dur={0.75} height='auto' classes="flex justify-center items-center" classes2="flex justify-center items-center" var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>
                     <div className=' h-full w-full flex justify-center items-center flex-col gap-7'>

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
                  </FramerOne>
                  </div>
               
                  {/* down arrow to scroll to next element */}
                  <ScrollDown section={section4} />

               </div>


               <div ref={section4} id="skills1" className="full-screen-section relative flex flex-col font-thin text-white text-8xl z-30">

               {/* filler element for menu top */}
               <div className=' h-12 w-full'></div>

                  <div className='  elementHeight w-full flex justify-center items-center flex-col select-none'>

                     {/* Skill's title */}
                     <span id='skillTextBox'>
                        <FramerOne del={0.6} dur={0.75} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>
                           <div id='skillsTextTop1' className=' text-8xl pl-4'>Skills</div>
                        </FramerOne>
                        <FramerOne del={0.8} dur={0.75} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                           <div id='skillLine1'></div>
                        </FramerOne>
                     </span>

                     {/* mapped out skill's array */}
                     <span id='skillBox'>
                       {Skills.map((skill) => {
                        return (
                           <SkillIcon element={skill.element} titleText={skill.titleText} />
                        )
                       })}
                     </span>

                  </div>

                  {/* down arrow to scroll to next element */}
                  <ScrollDown section={section5} />

               </div>


               <div ref={section5} id="skills2" className="full-screen-section relative flex flex-col font-thin text-white text-8xl z-30">

               {/* filler element for menu top */}
               <div className=' h-28 w-full'></div>

                  <div className='  elementHeight w-full flex justify-center items-center select-none flex-col text-2xl'>
                  <FramerOne del={0.25} dur={0.75} height='100%' classes="flex justify-center flex-col items-center" classes2="flex justify-center flex-col items-center" var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>

                     {/* skill's 2 text box */}
                     <div id='skillBox2Top'>
                        <div id='skillBox2Text' className=' select-text font-light'>
                          <span className=' font-normal text-4xl'>B</span>esides the skills i have in Frontend devlopment i am also skilled in a  variety of programs used to design  and   sketch out projects and videos used  for development. I have named all of the programs i am  comftarble with  
                          using  but if it is needed i dont think that  there would be a problem for me to  start using  any other program aswell.
                        </div>
                     </div>

                     {/* hard coded second skill's */}
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
                           <Blender />
                           <span className=' h-1/5'>Blender</span>
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

                  </FramerOne>
                  </div>
                  {/* down arrow to scroll to next element */}
                  <ScrollDown section={section6} />

               </div>


               <div ref={section6} id="socials" className="full-screen-section relative flex flex-col font-thin text-white text-8xl z-30">
               
                  {/* filler element for menu top */}
                  <div className=' h-20 w-full'></div>

                  <div id='socialMiddleAll' className='  elementHeight w-full flex justify-center items-center select-none flex-col'>

                     {/* social top text */}
                     <div id='topSocial' className=' w-full flex justify-center items-center flex-col gap-2'>

                        <FramerOne del={0.15} dur={0.75} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                           <span>Social Links</span>
                        </FramerOne>

                        <div id='socialLine'></div>

                     </div>

                     {/* hard coded social links */}
                     <div id='middleSocial' className=' w-full h-1/3 flex justify-center'>
                        <FramerOne del={0.3} dur={0.9} classes="flex justify-center items-center" classes2="flex justify-center items-center" height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>

                        <div id='boxForSocial' className='w-full h-full flex justify-around items-center text-3xl text-center'>

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

                        </FramerOne>
                     </div>

                     {/* contact information element section */}
                     <div id='bottomSocial' className=' w-full h-1/3 flex justify-start items-center flex-col text-5xl font-thin gap-3'>
                       <FramerOne del={0.5} dur={1} classes="flex justify-start flex-col items-center" classes2="flex justify-start flex-col items-center gap-3" height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>

                       Contact Mail:

                        <span id='emailtextSocial' className=' flex flex-col items-center text-3xl font-normal gap-1 cursor-pointer select-text' onClick={() => window.location.href = `mailto:${gmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
                           dammirtaljanovic@gmail.com
                        </span>

                       </FramerOne>
                     </div>

                  </div>

                  <ScrollDown section={section7} />

               </div>


               <div ref={section7} id="thankVisiting" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">

               {/* filler element for menu top */}
               <div className=' h-28 w-full'></div>

                  <div className='  elementHeight w-full flex justify-center items-center select-none flex-col'>

                     {/* last section title */}
                     <div id='thankYouText' className=' w-full h-1/3 flex justify-center items-center flex-col gap-3'>
                        <FramerOne del={0.3} dur={1} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                           <span>Thank you for visiting</span>
                        </FramerOne>
                        <div id='socialLine'></div>
                     </div>

                     {/* redirection section */}
                     <div className=' w-full h-2/3 flex flex-col items-center font-thin text-5xl gap-10'>
                        <FramerOne del={0.5} dur={1} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                           Also check out:
                        </FramerOne>
                        <span className=' text-4xl flex justify-center items-center flex-col gap-4'>
                           <FramerOne del={0.6} dur={1} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='fit-content'>
                              <div className=' font-light cursor-pointer' onClick={handlePortfolio}>My Portfolio</div>
                           </FramerOne>
                           &
                           <FramerOne del={0.7} dur={1} height='auto' var1={{opacity: 0, x: 75}} var2={{opacity: 1,x: 0}} width='fit-content'>
                              <div className=' font-light cursor-pointer' onClick={handleProjects}>My Projects</div>
                           </FramerOne>
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