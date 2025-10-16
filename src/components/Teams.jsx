"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const teamMembers = [
  { name: "Jerome Bell", role: "Trainer", img: "/images/trainer1.png" },
  { name: "Cameron Williamson", role: "Trainer", img: "/images/trainer2.png" },
  { name: "Darrell Steward", role: "Trainer", img: "/images/trainer3.png" },
  { name: "Dianne Russell", role: "Trainer", img: "/images/trainer4.png" },
  { name: "Cody Fisher", role: "Trainer", img: "/images/trainer5.png" },
  { name: "Theresa Webb", role: "Trainer", img: "/images/trainer6.png" },
];

const Teams = () => {
  return (
    <section className="py-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">Meet Our Team</h2>
          <p className="text-gray-800 dark:text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] font-light tracking-[0.5px] leading-[24px] py-6">
            Section is typically featured on websites to introduce the key
            members of a <br className="hidden sm:block" /> company, organization, or project.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 rounded-xl">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative text-center overflow-hidden rounded-xl"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={250}
                className="rounded-xl w-full h-[250px] object-cover"
              />
              <div className="absolute bottom-4 left-4 text-left">
                <h5 className="text-lg text-gray-200 font-semibold">{member.name}</h5>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
