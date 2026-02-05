import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Intro = ({ onNext, gif }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-valentine-pink blur-3xl opacity-30 rounded-full" />
        {gif ? (
          <img
            src={gif}
            alt="Hello"
            className="w-48 h-48 object-contain drop-shadow-lg"
          />
        ) : (
          <Heart className="w-24 h-24 text-valentine-red fill-valentine-pink animate-[pulse_2s_ease-in-out_infinite]" />
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-display"
      >
        Henlooooo! Penuuuuuuu <br />{" "}
        <span className="text-valentine-red">
          Kya main, jyu teeee kuch puch sakta hoon... ?
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-gray-600 mb-12 max-w-md"
      >
        R jyu taiyaar hoeeee ?{" "}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.9 }}
        onClick={onNext}
        className="bg-valentine-red text-white py-4 px-12 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:bg-red-500 transition-all cursor-pointer"
      >
        Haaaannnnmnmnmnmnmnnn ❤️
      </motion.button>
    </div>
  );
};

export default Intro;
