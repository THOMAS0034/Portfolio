// AnimatedCarousel.jsx
import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Landing pages",
    image: "./imageset/land.png",
    description:
      "High-converting and modern landing pages tailored to your goals — whether it's capturing leads, promoting a product, or launching an event. Built with responsive design and performance in mind."
  },
  {
    title: "Simple Website",
    image: "./imageset/website.webp",
    description:
      "Need a clean, functional website for your personal brand, startup, or business? I create responsive and easy-to-manage websites using React.js, HTML/CSS, and Tailwind CSS — with a focus on smooth user experience.",
  },
  {
    title: "UI/UX Designs and mockups",
    image: "./imageset/uiux.jpg",
    description:
      "From concept to clickable prototype — I design user-friendly interfaces that feel natural and look beautiful. I provide wireframes, mockups, and UI components that developers love to build from.",
  },
  {
    title: "Bug fixing",
    image: "./imageset/bug.jpg",
    description:
      "Got an annoying bug or layout glitch? I offer fast debugging and performance fixes to get your website running smoothly again. Whether it’s a CSS issue or a JavaScript error — I’ve got your back.",
  },
];

/* Animation helpers */
const swipeVariants = {
  enter: (direction) => ({
    x: direction === "right" ? -50 : 50,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction === "right" ? 50 : -50,
    opacity: 0,
  }),
};

const seq = { type: "spring", stiffness: 70, damping: 15 };


const AnimatedCarousel = () => {
  const [[idx, dir], setIdx] = useState([0, "right"]);
  const paginate = (d) =>
    setIdx(([i]) => [(i + (d === "right" ? 1 : slides.length - 1)) % slides.length, d]);

  const { title, image, description } = slides[idx];

  return (
      <div className="relative w-full max-w-6xl mx-auto p-4"> {/* wider */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg px-8 py-14 min-h-[45rem]"> {/* taller */}
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={idx}
            custom={dir}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-8"
          >
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-white"
              initial={{ x: dir === "right" ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={seq}
            >
              {title}
            </motion.h1>

            <motion.img
              src={image}
              alt={title}
              className="w-2/3 max-h-100 object-cover rounded-2xl"
              initial={{ x: dir === "right" ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...seq, delay: 0.15 }}
            />

            <motion.p
              className="text-white font-mono font-semibold text-lg px-12 text-center"
              initial={{ x: dir === "right" ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...seq, delay: 0.3 }}
            >
              {description}
            </motion.p>
                <Link to={"/form"}><button onClick={()=>navigate("/form")} className="p-1 px-3 bg-white hover:text-white hover:-translate-y-0.5 hover:bg-violet-600 transition delay-150 cursor-pointer text-violet-400 text-sm font-mono font-semibold rounded-2xl" >Hire Me</button></Link>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* nav buttons & dots unchanged */}
      <button aria-label="Previous" onClick={() => paginate("left")}
        className="absolute left-3 top-1/2 cursor-pointer hover:text-gray-500 -translate-y-1/2  rounded-2xl p-3 shadow">
        <ChevronLeftIcon className="w-7 h-7 text-white hover:text-gray-500 " />
      </button>

      <button aria-label="Next" onClick={() => paginate("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3 shadow">
        <ChevronRightIcon className="w-7 h-7 text-white hover:text-gray-500" />
      </button>

      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx([i, i > idx ? "right" : "left"])}
            className={`h-3 w-3 rounded-full ${i === idx ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCarousel;
