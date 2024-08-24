"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroContent = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: 1,
      scale: 0.9,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      scale: 1
    },
    hover: {
      scale: 1.1,
      transition: {
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      },
    },
  };
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const words = ["Vaib", "Web"];
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [3000, words.length]);

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="text-4xl flex md:text-7xl font-bold dark:text-white text-center">
        <motion.div
          variants={variants}
          key={currentWordIndex}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 2 }}
          className="flex min-w-[80px] md:min-w-[165px] flex-col items-center justify-center font-semibold"
        >
          {words[currentWordIndex]}
        </motion.div>
        <div className="pl-1 z-[1]">| DEV</div>
      </div>
      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        We are coming, very soon
      </div>
    </motion.div>
  );
};

export default HeroContent;
