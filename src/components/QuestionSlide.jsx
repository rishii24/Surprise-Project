import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionSlide = ({ question, gif, onYes, onNo }) => {
  const [shake, setShake] = useState(0);

  const handleNo = () => {
    // Trigger shake animation key to reset/rerun
    setShake(prev => prev + 1);
    if (onNo) onNo();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={shake}
          initial={{ x: 0 }}
          animate={shake > 0 ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <div className="mb-8">
            <img 
              src={gif || "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjEx.../placeholder.gif"} 
              alt="Cute decorative gif" 
              className="h-48 md:h-64 object-contain rounded-2xl drop-shadow-md"
            />
          </div>

          <motion.h2
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 leading-tight"
          >
            {question}
          </motion.h2>

          <div className="flex gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onYes}
              className="bg-green-500 text-white py-3 px-10 rounded-full text-lg font-bold shadow-lg hover:bg-green-600 transition-colors cursor-pointer"
            >
              YES
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
              className="bg-red-400 text-white py-3 px-10 rounded-full text-lg font-bold shadow-lg hover:bg-red-500 transition-colors cursor-pointer"
            >
              NO
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionSlide;
