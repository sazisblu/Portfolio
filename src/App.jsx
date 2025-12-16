import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import logo from "./assets/images/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Navitem from "./components/nav-item";
function App() {
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
  const secondappeartransition = {
    duration: 0.3,
    delay: 0.9,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const thirdappeartransition = {
    duration: 0.3,
    delay: 1.2,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <div className="min-h-screen px-4 md:px-8">
      <motion.div
        variants={variants}
        animate={cursorType}
        transition={{ type: "tween", ease: "backOut" }}
        className="cursor fixed top-0 left-0 z-100 rounded-full pointer-events-none hidden md:block"
      />

      <motion.nav
        className="flex flex-wrap items-center justify-between mt-8 md:mt-[50px] gap-4"
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={zeroappeartransition}
      >
        <div className="text-3xl md:text-5xl font-extrabold font-my_mono_regular ">
          Saz.
        </div>
        <div
          className="flex mr-8 gap-4 md:gap-10"
          onMouseEnter={setToSmallText}
          onMouseLeave={setToDefault}
        >
          {/* <MdDarkMode size={40} className="md:w-[50px] md:h-[50px]" /> */}
          <a href="https://github.com/sazisblu">
            <FaGithub size={40} className="md:w-[50px] md:h-[50px]" />
          </a>
          <a href="https://www.linkedin.com/in/sajan-sahikarmi-17217b271/">
            <FaLinkedin size={40} className="md:w-[50px] md:h-[50px]" />
          </a>
        </div>
      </motion.nav>

      <motion.h1
        className="text-center mt-16 md:mt-[10%] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold font-archivo leading-tight"
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={firstappeartransition}
      >
        Namaste, I am{" "}
        <span className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text font-libre font-light text-transparent">
          Sajan
        </span>
      </motion.h1>

      <motion.p
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] mt-4 md:mt-6 font-archivo"
        onMouseEnter={setToSmallText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={secondappeartransition}
      >
        AI/ML, UI/UX, WEB
      </motion.p>

      <motion.div
        id="nav"
        className="grid grid-cols-2 md:flex mt-12 md:mt-[10%] gap-4 md:gap-10 justify-center max-w-4xl mx-auto font-my_mono_regular"
        onMouseEnter={setToSmallText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={thirdappeartransition}
      >
        <a href="/Personal">
          <Navitem index={"00"} title={"Personal"} />
        </a>
        <a href="/Projects">
          {" "}
          <Navitem index={"01"} title={"Projects"} />
        </a>
        <a href="/Expertise">
          <Navitem index={"10"} title={"Skills"} />
        </a>
        <a href="/Contact">
          {" "}
          <Navitem index={"11"} title={"Contact"} />
        </a>
      </motion.div>
    </div>
  );
}

export default App;
