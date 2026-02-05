import React from 'react';
import { motion } from 'framer-motion';

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
           <img src={gif} alt="Kiss" className="h-48 object-contain drop-shadow-lg rounded-xl" />
        ) : ("💖")}
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-valentine-red mb-6"
      >
        Yay! I knew it!
      </motion.h1>

      <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.6 }}
         className="text-xl md:text-2xl text-gray-700 max-w-lg leading-relaxed"
      >
        Thank you for being my Valentine. I love you so much! <br/>
        <span className="text-sm text-gray-400 mt-4 block">(Date details coming soon 😉)</span>
      </motion.p>
    </div>
  );
};

export default ThankYou;
