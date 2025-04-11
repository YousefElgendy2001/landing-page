import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "مَن نَحْنُ؟",
      content:
        "نحن فريق من المطورين والمصممين نهدف لتقديم أفضل الحلول البرمجية لعملائنا.",
    },
    {
      title: "ما الذي يُمَيِّزُنَا؟",
      content:
        "نتميز بالإبداع، الدقة، والالتزام بمواعيد التسليم مع تجربة مستخدم استثنائية.",
    },
    {
      title: "رُؤْيَتُنَا لِلْمُسْتَقْبَل؟",
      content:
        "نسعى لنكون من أوائل الشركات العربية في مجال تطوير البرمجيات الذكية.",
    },
  ];

  return (
    <>
      {/* العنوان الكبير */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-5 text-center text-5xl font-bold text-red-600"
      >
        <h2>مَنْ نَحْنُ؟</h2>
      </motion.div>

      {/* الأكورديون */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-5 text-right font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            >
              {item.title}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 bg-white text-gray-600 text-right">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </>
  );
}
