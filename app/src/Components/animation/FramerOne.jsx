import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const FramerOne = ({children, width, var1, var2, height, position, classes, dur, del}) => {
    const elementDiv = useRef(null);
    const inView = useInView(elementDiv, {once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);

    return (
        <div className={classes} ref={elementDiv} style={{position, width, height, overflow: "hidden"}}>
            <motion.div
              className=" z-20"
              style={{height}}
              variants={{
                hidden: var1,
                visible: var2,
              }}
              initial="hidden"
              transition={{duration: dur, delay: del}}
              animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default FramerOne;