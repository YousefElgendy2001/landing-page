import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/Images/logo.png";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-black via-gray-900 to-[#0f172a] text-white py-10 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
    >
      {/* لوجو كبير جدًا على الشمال بأنيميشن زووم + سلايد */}
      <motion.div
  initial={{ x: -200, scale: 0.8, opacity: 0 }}
  animate={{ x: 0, scale: 1, opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-full md:w-[45%] flex justify-start"
>
  <img
    src={logo}
    alt="Logo"
    className="w-[400px] md:w-[600px] lg:w-[650px]"
  />
</motion.div>

     

      {/* النص بأنيميشن زووم + سلايد */}
      <motion.div
        initial={{ x: 200, scale: 0.8, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-[55%] text-center md:text-right"
      >
      <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
  ثَوْرَةُ التَّعْلِيمِ
  <br />
  <br />
  لِلْمُعَلِّمِينَ وَالطُّلَّابِ
  <br />
  <span className="text-gray-300 font-normal text-xl md:text-2xl">
    مَنصَّةٌ وَبِيٌّ شَامِلَةٌ مُصَمَّمَةٌ لِتَمْكِينِ اَلْمُعَلِّمِينَ وَتَعْزِيزِ تَجَارِبِ اَلْعِلْمِ
  </span>
</h1>


      </motion.div>
    </div>
  );
}
