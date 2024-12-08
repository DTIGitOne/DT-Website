import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const FramerOne = ({children, width, var1, var2, height, position, classes, classes2, dur, del}) => {
    const elementDiv = useRef(null); // ref for the div animation wrapper 
    const inView = useInView(elementDiv, {once: true}) // if the element is in current view 

    const mainControls = useAnimation(); // framer function

    // useEffect hook used to rerender on inView change
    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);

    return (
        <div className={classes} ref={elementDiv} style={{position, width, height, overflow: "hidden"}}>
        {/* div meant for adjusting the position for different properties*/}
            <motion.div
              className={`z-20 ${classes2}`}
              style={{height}}
              variants={{
                hidden: var1,
                visible: var2,
              }}
              initial="hidden"
              transition={{duration: dur, delay: del}}
              animate={mainControls}
            >
                {/* the passed elements */}
                {children}
            </motion.div>
        </div>
    );
}

export default FramerOne;