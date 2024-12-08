import FramerOne from "../animation/FramerOne";

const SkillIcon = ({element , titleText}) => {
    return (
        <div className='gridItem'>
            <FramerOne del={0.4} dur={1} classes="flex justify-center items-center" classes2="flex justify-center items-center" height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                {element}
            </FramerOne>
            <FramerOne del={0.6} dur={1} classes="flex justify-center items-center" height='auto' var1={{opacity: 0, y: 0}} var2={{opacity: 1,y: 0}} width='fit-content'>
                {titleText}
            </FramerOne>
        </div>
    );
}

export default SkillIcon;