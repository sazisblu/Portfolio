import React, { useState } from "react";
import "../index.css";
import { motion, scale } from "framer-motion";
const Navitem = ({ index, title }) => {
  const [isHovered, setIsHovered] = useState("default");
  const variants = {
    default: {
      color: "black",
      y: 0,
      scale: 1,
    },

    hovered: {
      color: "#023e8a",
      y: -10,
      scale: 1.1,
    },
  };
  // i cannot directly call the setter function from the component itself as it results in infinite looping of react renderer
  const hoverer = () => {
    setIsHovered("hovered");
  };
  const defaulter = () => {
    setIsHovered("default");
  };
  return (
    <>
      <motion.div
        className="font-my_mono_regular text-xl font-extrabold"
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
        variants={variants}
        animate={isHovered}
        onMouseEnter={hoverer}
        onMouseLeave={defaulter}
      >
        // {title} <span className=" text-gray-500 text-sm">{index}</span>
      </motion.div>
    </>
  );
};

export default Navitem;
