"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const FramerDiv = ({ children, delay, classes = "", duration = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControllers = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControllers.start("visible");
    }
  }, [isInView, mainControllers]);
  return (
    <motion.div
      ref={ref}
      className={classes}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      animate={mainControllers}
      initial="hidden"
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FramerDiv;
