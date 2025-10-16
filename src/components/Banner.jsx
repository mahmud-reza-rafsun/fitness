"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="bg-black dark:bg-black text-white lg:py-36 px-2 sm:px-6 lg:px-12 xl:px-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    <div className="w-full lg:w-1/2 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[40px] sm:text-[27px] md:text-[37px] lg:text-[47px] xl:text-[57px] font-extrabold leading-tight mt-20"
                        >
                            Get body in <br />
                            <span className="font-[Dancing Script] text-[#e6533c]">shape</span> & stay
                            <br /> healthy
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                            className="text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] font-light tracking-[0.5px] leading-[24px] py-6"
                        >
                            Getting your body in shape and staying healthy involves a combination
                            of regular exercise, balanced nutrition, mental wellness, and
                            consistent habits.
                        </motion.p>

                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }} className="flex flex-wrap sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
                            <button className="px-4 lg:px-8 py-2.5 text-xs lg:text-[17px] font-medium bg-gray-900 text-white dark:bg-orange-500 rounded-full hover:bg-gray-800 dark:hover:bg-orange-500 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                                Join Club Now!
                            </button>
                            <button className="px-4 lg:px-8 py-2.5 text-xs lg:text-[17px] font-medium text-white border-2 dark:border-orange-500 rounded-full transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                                Download Now
                            </button>
                        </motion.div>
                    </div>


                    <div className="w-full lg:w-1/2 relative flex items-center justify-center">

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                            }}
                            className="absolute right-[5%] lg:right-[10%] top-[35%] backdrop-blur-md border border-[#353535] rounded-[15px] text-white px-5 py-4 shadow-lg text-center"
                        >
                            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold">
                                500+
                            </h2>
                            <p className="text-[12px] sm:text-[14px] md:text-[15px] font-light text-gray-400">
                                Free Workout Videos
                            </p>
                        </motion.div>


                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="flex justify-center items-center"
                        >
                            <Image
                                src="/images/Images 2.png"
                                alt="Workout"
                                width={500}
                                height={500}
                                priority
                                className="w-full max-w-[500px] object-contain"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                            className="absolute left-[8%] lg:left-[-0%] bottom-[10%] flex items-center gap-4 sm:gap-5 backdrop-blur-md border border-[#353535] rounded-[15px] text-white px-5 py-4 shadow-lg">
                            <div className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full bg-[#e6533c]" />
                            <div>
                                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold">
                                    350+
                                </h2>
                                <p className="text-[12px] sm:text-[14px] md:text-[15px] font-light text-gray-400">
                                    Video Tutorials
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
