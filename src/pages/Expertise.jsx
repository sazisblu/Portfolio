import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiNixos, SiVim } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi";
import { useState, useEffect } from "react";
import StaggeredMenu from "../components/StaggeredMenu";

function Expertise() {
  const languages = [
    { name: "React JS", icon: <FaReact size={40} /> },
    { name: "Node JS", icon: <FaNodeJs size={40} /> },
    { name: "Express JS", icon: <SiExpress size={40} /> },
    { name: "Hugging Face", icon: <HiSparkles size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
  ];

  const tools = [
    { name: "NixOS", icon: <SiNixos size={40} /> },
    { name: "VS Code", icon: <VscCode size={40} /> },
    { name: "Vim", icon: <SiVim size={40} /> },
  ];
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
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4">
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold font-my_mono_regular mb-4 text-black">
            Skills & Expertise
          </h1>
          <p className="text-lg font-archivo text-black">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Languages & Frameworks */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-archivo mb-8 text-black">
            Languages & Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-black">{lang.icon}</div>
                <span className="text-sm font-archivo text-black text-center">
                  {lang.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold font-archivo mb-8 text-black">
            Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-black">{tool.icon}</div>
                <span className="text-sm font-archivo text-black text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Expertise;
