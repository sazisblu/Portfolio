import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import logo from "./assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
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
    <>
    
      <motion.div
        variants={variants}
        animate={cursorType}
        transition={{ type: "tween", ease: "backOut" }}
        className="cursor fixed top-0 left-0  z-100 rounded-full pointer-events-none"
      />

      <motion.div
        className="Nav w-20px h-20px flex mt-[50px] w-full "
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={zeroappeartransition}
      >
        <div className="  ml-10 w-[200px] text-center color  justify-center h-[60px] font-my_mono_regular text-5xl font-extrabold">
          {/* <img src={logo} alt="" /> */}
          Saz.
        </div>
        <div
          className="flex justify-around gap-10 ml-[70%]"
          onMouseEnter={setToSmallText}
          onMouseLeave={setToDefault}
        >
          <MdDarkMode size={50} />
          <FaGithub size={50} />
        </div>
      </motion.div>

      <motion.div
        className="place-self-center mt-[10%] text-[80px] font-archivo"
        onMouseEnter={setToText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={firstappeartransition}
      >
        Namaste , I am{" "}
        <span className="font-libre inline-block bg-gradient-to-r  from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Sajan
        </span>
      </motion.div>
      <motion.div
        className="place-self-center  text-[50px] font-archivo"
        onMouseEnter={setToSmallText}
        onMouseLeave={setToDefault}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -10, opacity: 0 }}
        transition={secondappeartransition}
      >
        AI/ML, UI/UX, WEB
      </motion.div>

      <motion.div
        id="nav"
        className="flex mt-[10%] gap-10 justify-center"
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
    </>
  );
}

export default App;
