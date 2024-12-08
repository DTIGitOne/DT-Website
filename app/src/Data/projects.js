import Runterra from '../Images/Runterra.png';
import DriveMotors from '../Images/DriveMotors.png';
import myWebsite1 from '../Images/myWebsite1.png';
import ATWebsite from '../Images/ATWebsite.png';
import WatchRecreation from '../Images/WatchRecreation.png'
import Roulette from '../Images/Roulette.png'
import HTMLicon from '../SVGs/HTMLIcon';
import CSSicon from '../SVGs/CSSIcon';
import JSicon from '../SVGs/JSIcon';
import Reacticon from '../SVGs/ReactIcon';
import Jqueryicon from '../SVGs/JQuery';
import Tailwindicon from '../SVGs/TailwindIcon';
import Sassicon from '../SVGs/SassIcon';
import NodeJsIcon from '../SVGs/Nodejs';
import TypeScriptIcon from '../SVGs/TypeScript';
import NextJsIcon from '../SVGs/NextJS';
import Python from '../SVGs/Python';

// array of objects mapped out at /Projects
export const Projects = [
    {
        id: 1, 
        image: DriveMotors, 
        title: "Drive Motors",
        url: "https://github.com/DTIGitOne/dmotors-frontend2"
    },
    {
        id: 2, 
        image: Runterra, 
        title: "Runterra",
        url: "https://github.com/DTIGitOne/legends-of-runterra"
    },
    {
        id: 3, 
        image: myWebsite1, 
        title: "Personal Website",
        url: "https://github.com/DTIGitOne/DT-Website"
    },
    {
        id: 4, 
        image: ATWebsite, 
        title: "Personal Website",
        url: "https://github.com/DTIGitOne/at-website"
    },
    {
        id: 5, 
        image: WatchRecreation, 
        title: "Watch Recreation",
        url: "https://github.com/DTIGitOne/watch-site-recreation"
    },
    {
        id: 6, 
        image: Roulette, 
        title: "Roulette",
        url: "https://github.com/DTIGitOne/roulette-frontend"
    },
]

// array of skills for /Main
export const Skills = [
    {element: <HTMLicon />, titleText: "HTML"},
    {element: <CSSicon />, titleText: "CSS"},
    {element: <JSicon />, titleText: "JavaScript"},
    {element: <Reacticon />, titleText: "ReactJS"},
    {element: <Jqueryicon />, titleText: "JQuery"},
    {element: <Tailwindicon />, titleText: "Tailwind CSS"},
    {element: <Sassicon />, titleText: "SASS"},
    {element: <NodeJsIcon />, titleText: "Node.JS"},
    {element: <TypeScriptIcon />, titleText: "TypeScript"},
    {element: <NextJsIcon />, titleText: "Next.JS"},
    {element: <Python />, titleText: "Python"},
]