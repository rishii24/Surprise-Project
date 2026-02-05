import React from "react";
import { motion } from "framer-motion";

const ThankYou = ({ gif }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 pb-20">
      <motion.div
        initial={{ rotate: -10, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mb-8"
      >
        {gif ? (
          <img
            src={gif}
            alt="Kiss"
            className="h-48 object-contain drop-shadow-lg rounded-xl"
          />
        ) : (
          "💖"
        )}
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-valentine-red mb-6"
      >
        Ayeeeeeeeeeee 😋😋😋😋😋😋😋😋😋😋
      </motion.h1>
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-valentine-red mb-6"
      >
        mujhe to pata thaaaa 😘😘😘😘❤️❤️❤️❤️
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl text-gray-700 max-w-lg leading-relaxed"
      >
        Thnkssss Penuuuuu meri Valentine banne ke liye 🥰. I lubsssss jyuuuuuu!{" "}
        <br />
        <span className="text-sm text-gray-400 mt-4 block">
          (Badhiya party karne chalenge 😉)
        </span>
      </motion.p>
    </div>
  );
};

export default ThankYou;
