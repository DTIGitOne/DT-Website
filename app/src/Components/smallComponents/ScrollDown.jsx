import { scrollTo } from "../../Constants/Constants";
import Arrow from "../../SVGs/Arrow";
import FramerOne from "../animation/FramerOne";

// component for the down arrow and its function
const ScrollDown = ({section}) => {
    return(
        <FramerOne del={0.2} dur={1} classes="flex justify-center items-center bottom-2" position={"absolute"} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='100%'>
            <div className='scrollHeight w-full flex justify-center'>
                <button onClick={() => scrollTo(section)} className=' scrollButton flex flex-col gap-2 p-1 items-center select-none justify-center'>
                    <Arrow />
                </button>
            </div>
        </FramerOne>
    );
}

export default ScrollDown;