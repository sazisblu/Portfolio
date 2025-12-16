// import { Card, CardContent } from "@/components/ui/card";
import tobeyImg from "../assets/images/tb.png";
import nixImg from "../assets/images/Nix.png";
import pustakImg from "../assets/images/logo.png";
import hcImg from "../assets/images/hc.png";
import hkImg from "../assets/images/hk.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import StaggeredMenu from "../components/StaggeredMenu";

const projects = [
  {
    id: 1,
    title: "Tobey Boxxed",
    image: tobeyImg,
    description: "Entertainment platform",
    githubUrl: "https://github.com/sazisblu/Tobey-Boxed",
  },
  {
    id: 2,
    title: "Dot Files",
    image: nixImg,
    description: "My Dot files for Nixos.",
    githubUrl: "https://github.com/sazisblu",
  },
  {
    id: 3,
    title: "Pustak",
    image: pustakImg,
    description: "Digital library platform",
    githubUrl: "https://github.com/X-COBWEB/PUSTAK-FINAL-VER",
  },
  {
    id: 4,
    title: "Hamro Chautari",
    image: hcImg,
    description: "Community platform",
    githubUrl: "https://github.com/sazisblu",
  },
  {
    id: 5,
    title: "Hisab Kitab",
    image: hkImg,
    description: "Financial management app",
    githubUrl: "https://github.com/Ambiton-HackFest-2082/Profit.exe",
  },
];

function Project() {
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
  const [liked, setLiked] = useState({});

  const toggleLike = (projectId) => {
    setLiked((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

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
      <div className="overflow-hidden fixed inset-0 h-screen z-50 pointer-events-none">
         <motion.div
                variants={variants}
                animate={cursorType}
                transition={{ type: "tween", ease: "backOut" }}
                className="cursor fixed top-0 left-0  z-100 rounded-full pointer-events-none"
              />
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

      <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold font-my_mono_regular mb-3">
              Projects
            </h1>
            <p className="text-gray-600 text-lg font-archivo">
              A collection of my works and Contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="p-0">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center p-8 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-archivo mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 font-archivo">
                      {project.description}
                    </p>
                    <div className="flex gap-3 items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm font-archivo"
                        onMouseEnter={setToSmallText}
                        onMouseLeave={setToDefault}
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                      <button
                        onClick={() => toggleLike(project.id)}
                        className="flex items-center gap-2 bg-white border border-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm font-archivo"
                        onMouseEnter={setToSmallText}
                        onMouseLeave={setToDefault}
                      >
                        {liked[project.id] ? (
                          <FaHeart size={16} color="toamto" />
                        ) : (
                          <CiHeart size={16} />
                        )}
                        Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
