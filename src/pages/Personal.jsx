import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import StaggeredMenu from "../components/StaggeredMenu";

function Personal() {
  const zeroappeartransition = {
    duration: 1,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const firstappeartransition = {
    duration: 1,
    delay: 0.6,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    let mouseMove = (e) => {
      // console.log("mouse moved", "X:", e.clientX, "Y:", e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const [cursorType, setCursorType] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      width: 30,
      height: 30,
      backgroundColor: "#000000",
    },
    text: {
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      width: 150,
      height: 150,
      backgroundColor: "#F8F9FA",
      mixBlendMode: "difference",
    },
    smalltext: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      width: 50,
      height: 50,
      backgroundColor: "#023e8a",
      mixBlendMode: "difference",
    },
  };

  const setToText = () => {
    setCursorType("text");
  };
  const setToDefault = () => {
    setCursorType("default");
  };

  const setToSmallText = () => {
    setCursorType("smalltext");
  };

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Projects", ariaLabel: "Learn about us", link: "/Projects" },
    { label: "Skills", ariaLabel: "View our services", link: "/Expertise" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/sazisblu" },
  ];

  return (
    <>
      <motion.div
        variants={variants}
        animate={cursorType}
        transition={{ type: "tween", ease: "backOut" }}
        className="cursor fixed top-0 left-0  z-100 rounded-full pointer-events-none"
      />
      <div className="overflow-hidden fixed inset-0 h-screen z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          accentColor="#ff6b6b"
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>

      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl font-my_mono_regular font-bold text-center mt-12 px-4"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={zeroappeartransition}
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
      >
        Personal
      </motion.div>
      <motion.div
        className="text-3xl sm:text-4xl md:text-5xl font-archivo font-bold text-center mt-12 sm:mt-20 md:mt-50 px-4"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={zeroappeartransition}
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
      >
        Page Under Construction
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl mt-10 text-gray-500 font-archivo text-center flex flex-col justify-center items-center px-4"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -10, opacity: 0 }}
          transition={firstappeartransition}
        >
          <span onMouseEnter={setToSmallText} onMouseLeave={setToDefault}>
            why dont you play with this button in the meanwhile
          </span>
          <button
            onMouseEnter={setToDefault}
            className="border-2 rounded-[20px] text-center mt-10 w-[180px] p-2 text-black hover:text-fuchsia-400 transition cursor-none"
          >
            Hello there
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Personal;
