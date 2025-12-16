import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import StaggeredMenu from "../components/StaggeredMenu";
import { FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const YOUR_SERVICE_ID = "service_zxmrtdg";
    const YOUR_PUBLIC_KEY = "TMI_IXQ-r26uwsK3c";
    const YOUR_TEMPLATE_ID = "template_clpgd86";
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowModal(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setShowModal(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const form = useRef();

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 pointer-events-auto"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <FaCheckCircle size={64} className="text-green-500" />
              <h2 className="text-3xl font-bold font-my_mono_regular text-black">
                Thank You!
              </h2>
              <p className="text-lg font-archivo text-black text-center">
                Your message has been sent successfully.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold font-my_mono_regular mb-4 text-black">
            Get in Touch
          </h1>
          <p className="text-lg font-archivo text-black">
            Have a question or want to work together?
          </p>
        </motion.div>

        <motion.form
          ref={form}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-black font-archivo font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black font-archivo"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-black font-archivo font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black font-archivo"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-black font-archivo font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-black font-archivo resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-my_mono_regular py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
            onMouseEnter={setToText}
            onMouseLeave={setToDefault}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
