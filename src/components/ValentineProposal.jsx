import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ValentineProposal = ({ onYes, ...props }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Magnet effect logic can be complex, a simpler approach for "running away" is random position on hover
  const moveNoButton = () => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const btnWidth = 100; // approx
    const btnHeight = 50; // approx
    
    // Calculate available space
    const maxX = containerRect.width/2 - btnWidth;
    const maxY = containerRect.height/2 - btnHeight;
    const minX = -containerRect.width/2 + btnWidth;
    const minY = -containerRect.height/2 + btnHeight;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoBtnPosition({ x: newX, y: newY });
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center h-full text-center p-6 relative w-full overflow-hidden">
        {props.gif && (
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            src={props.gif} 
            alt="Please" 
            className="h-48 object-contain mb-8 drop-shadow-lg"
          />
        )}
        <motion.h2
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ type: "spring", stiffness: 100 }}
           className="text-4xl md:text-7xl font-bold text-valentine-red mb-16 drop-shadow-sm font-display"
        >
          Will you be my Valentine? 🌹
        </motion.h2>

        <div className="flex gap-8 items-center justify-center relative h-32 w-full">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 71, 87, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="bg-valentine-red text-white py-4 px-12 rounded-full text-2xl font-bold shadow-xl z-10 cursor-pointer"
          >
            YES! 🥰
          </motion.button>
          
          <motion.button
            animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton} // For mobile touch
            className="bg-gray-400 text-white py-4 px-12 rounded-full text-2xl font-bold shadow-lg absolute cursor-pointer"
            style={{ position: 'absolute' }} // Start relatively positioned but moves absolutely via transform
          >
            NO 😢
          </motion.button>
        </div>
    </div>
  );
};

export default ValentineProposal;
