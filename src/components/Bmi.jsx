"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("Male");
  const [activity, setActivity] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;
    const bmi = w / (h * h);
    setBmiResult(bmi.toFixed(2));

    if (bmi < 18.5) setStatus("Underweight");
    else if (bmi < 25) setStatus("Healthy");
    else if (bmi < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  const resetBMI = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setSex("Male");
    setActivity("");
    setBmiResult(null);
    setStatus("");
  };

  const chartData = [
    { label: "Below 18.5", status: "Underweight" },
    { label: "18.5 - 24.9", status: "Healthy" },
    { label: "25.0 - 29.9", status: "Overweight" },
    { label: "30.0 - and Above", status: "Obese" },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900/50 ">
   
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center pb-8"
      >
        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">BMI Calculator</h2>
        <p className="text-gray-900 dark:text-gray-300 px-2 lg:px-0 text-[14px] sm:text-[15px] md:text-[16px] font-light tracking-[0.5px] leading-[24px] py-6">
          BMI helps give a general idea of whether a person’s body weight falls within a healthy range, but it does not differentiate between muscle and fat mass.
        </p>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16"
      >
        
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-6">BMI Calculator Chart</h3>
          <table className="w-full text-left border-collapse border border-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border border-gray-700 text-black dark:text-white font-medium">BMI</th>
                <th className="px-6 py-3 border border-gray-700 text-black dark:text-white font-medium">Weight Status</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border border-white ${
                    status === item.status ? "bg-orange-500 text-white font-bold" : "text-gray-300"
                  }`}
                >
                  <td className="px-6 py-3 border border-gray-700 text-black dark:text-white">{item.label}</td>
                  <td className="px-6 py-3 border border-gray-700 text-black dark:text-white">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Calculate your BMI</h3>
          <p className="text-gray-400 dark:text-gray-400 text-sm lg:text-base mb-4">
            Interactive tool to determine your Body Mass Index (BMI)
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="p-3 bg-white dark:bg-gray-700 rounded-md text-black dark:text-white placeholder-gray-900 dark:placeholder-gray-300 outline-none"
            />
            <input
              type="text"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="p-3 bg-white dark:bg-gray-700 rounded-md text-black dark:text-white placeholder-gray-900 dark:placeholder-gray-300 outline-none"
            />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="p-3 bg-white dark:bg-gray-700 rounded-md text-black dark:text-white placeholder-gray-900 dark:placeholder-gray-300 outline-none"
            />
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="p-3 bg-white dark:bg-gray-700 rounded-md text-black dark:text-white outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="p-3 bg-white dark:bg-gray-700 rounded-md text-black dark:text-white outline-none col-span-2"
            >
              <option value="">Select an activity factor</option>
              <option value="Low">Low Activity</option>
              <option value="Moderate">Moderate Activity</option>
              <option value="High">High Activity</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateBMI}
              className="px-4 lg:px-8 py-2 lg:py-2  lg:text-base font-medium bg-orange-500 text-white rounded-xl hover:bg-orange-400 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              Calculate
            </button>
            <button
              onClick={resetBMI}
              className="px-4 lg:px-8 py-1.5 lg:py-2 text-xs lg:text-base font-medium bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all shadow-sm hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              Reset
            </button>
          </div>

          {bmiResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 p-4 bg-gray-700 rounded-md text-white"
            >
              <p>Your BMI: <span className="font-bold">{bmiResult}</span></p>
              <p>Weight Status: <span className="font-bold">{status}</span></p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default BMICalculator;
