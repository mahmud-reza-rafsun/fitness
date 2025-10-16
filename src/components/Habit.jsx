"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Habit = () => {
  const habits = [
    {
      title: "Movement",
      description: "A movement is an organized effort by a group of individuals.",
      image: "/images/image 3.png",
    },
    {
      title: "Time",
      description: "Time is a fundamental concept that refers to the continuous.",
      image: "/images/image 2.png",
    },
    {
      title: "Practice",
      description: "Practice refers to the repeated performance or exercise.",
      image: "/images/image 4.png",
    },
    {
      title: "Weight Loss",
      description: "Weight Loss refers to the process of reducing body weight.",
      image: "/images/image 5.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-white dark:text-white dark:bg-black ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center text-black dark:text-white">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">Change Your Habits</h2>
          <p className="text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] font-light tracking-[0.5px] leading-[24px] py-6">
            Your Habits is a transformative guide designed to help individuals <br /> 
            break free from unproductive routines.
          </p>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {habits.map((habit, index) => (
            <motion.div
              key={index}
              className="p-2 rounded-2xl flex flex-col items-center w-60"
              variants={boxVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={habit.image}
                alt={habit.title}
                width={120}
                height={120}
                className="rounded-full"
              />
              <h4 className="text-black dark:text-white text-lg font-medium mt-4">{habit.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{habit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Habit;
