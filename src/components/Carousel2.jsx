import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "React Job Listing Page",
    image: "./imageset/job.png",
    description:
      "This is a fully responsive job listing platform where users can browse available positions, filter them by category, and view detailed job descriptions. The UI is clean and intuitive, built using React and Tailwind CSS, with client-side state managed via Zustand. It was designed to be scalable and performance-focused, offering a professional layout ideal for startups or HR dashboards.",
  },
  {
    title: "Portfolio Website",
    image: "./imageset/weather.png",
    description:
      "This website is my personal portfolio, designed to showcase my skills, services, and projects. Built with React and Tailwind CSS, it features smooth navigation, responsive layouts, and a clean UI that reflects my design style. The site serves as both a demonstration of my technical ability and a central hub for clients and collaborators to connect with me.",
  },
  {
    title: "To-do List",
    image: "./imageset/todo.png",
    description:
      "A minimal yet functional to-do application that allows users to add, complete, and delete daily tasks with ease. Built using React and Tailwind CSS, it saves user data using LocalStorage, so tasks persist even after refreshing the browser. Its sleek interface and responsive design make it a simple productivity tool that works across all devices.",
  },
  {
    title: "Weather Web App",
    image: "./imageset/weather.png",
    description:
      "This weather application provides real-time weather updates based on user input. Built with React and styled using Tailwind CSS, it connects to the OpenWeatherMap API to display temperature, humidity, and weather icons for any searched city. The interface is clean, responsive, and easy to use, offering a smooth experience even for first-time visitors.",
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

const Carousel2 = () => {
  const [[idx, dir], setIdx] = useState([0, "right"]);
  const paginate = (d) =>
    setIdx(([i]) => [(i + (d === "right" ? 1 : slides.length - 1)) % slides.length, d]);

  const { title, image, description } = slides[idx];

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4 mb-50 mt-20"> {/* wider */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-black px-8 py-14 min-h-[40rem]"> {/* taller */}
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
              className="w-full max-h-80 object-cover rounded-lg"
              initial={{ x: dir === "right" ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...seq, delay: 0.15 }}
            />

            <motion.p
              className="text-gray-200 px-12 text-center"
              initial={{ x: dir === "right" ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...seq, delay: 0.3 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* nav buttons & dots unchanged */}
      <button
        aria-label="Previous"
        onClick={() => paginate("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2  rounded-full p-3 shadow"
      >
        <ChevronLeftIcon className="w-7 h-7 text-white hover:text-gray-600 cursor-pointer" />
      </button>

      <button
        aria-label="Next"
        onClick={() => paginate("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 shadow"
      >
        <ChevronRightIcon className="w-7 h-7 text-white hover:text-gray-600 cursor-pointer" />
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

export default Carousel2;
