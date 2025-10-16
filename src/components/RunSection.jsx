"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const RunSection = () => {
    return (
        <section className="py-16 px-6 lg:px-0">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 bg-orange-400 dark:bg-gray-900 p-5 md:p-8 rounded-xl">

                    {/* Left */}
                    <motion.div
                        className="w-full md:w-1/2 "
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-snug">
                            Run an Extra <br /> Mile Easily
                        </h1>
                        <p className="text-white dark:text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] font-light tracking-[0.5px] leading-[24px] py-3">
                            It involves maintaining a steady pace, focusing on breathing techniques, and conserving energy throughout your run. To make it feel effortless, you can train consistently
                        </p>
                        <div className="mt-5">
                            <button className="px-4 lg:px-8 py-1.5 lg:py-2 text-xs lg:text-base font-medium bg-gray-900 text-white dark:bg-orange-500 dark:text-white rounded-full hover:bg-gray-800 dark:hover:bg-orange-500 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer">
                                Join Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/run.jpg"
                            alt="Run"
                            width={500}
                            height={500}
                            className="rounded-xl w-[90%] mx-auto md:mx-0 object-cover"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default RunSection;
