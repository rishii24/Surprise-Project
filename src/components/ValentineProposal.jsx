import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ValentineProposal = ({ onYes, ...props }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [textPhase, setTextPhase] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Sequence the text changes
    const timer1 = setTimeout(() => setTextPhase(1), 2000); // After 2s, show "meri"
    const timer2 = setTimeout(() => setTextPhase(2), 3500); // After 3.5s, show final

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Magnet effect logic
  const moveNoButton = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const btnWidth = 100; // approx
    const btnHeight = 50; // approx

    // Calculate available space
    const maxX = containerRect.width / 2 - btnWidth;
    const maxY = containerRect.height / 2 - btnHeight;
    const minX = -containerRect.width / 2 + btnWidth;
    const minY = -containerRect.height / 2 + btnHeight;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoBtnPosition({ x: newX, y: newY });
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-full text-center p-6 relative w-full overflow-hidden"
    >
      {props.gif && (
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src={props.gif}
          alt="Please"
          className="h-48 object-contain mb-8 drop-shadow-lg"
        />
      )}

      <div className="flex flex-col items-center justify-center mb-8 min-h-[150px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-valentine-red drop-shadow-sm font-display px-4 mb-2"
        >
          Kyaaaa jyuuuuuuu
        </motion.h2>

        {textPhase >= 1 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-valentine-red drop-shadow-sm font-display px-4 mb-2"
          >
            meri
          </motion.h2>
        )}

        {textPhase >= 2 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-valentine-red drop-shadow-sm font-display px-4"
          >
            Ballentineeeeee banogiiiii ?????
          </motion.h2>
        )}
      </div>

      {/* Only show buttons on the final text phase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: textPhase === 2 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-8 items-center justify-center relative h-32 w-full"
        style={{ pointerEvents: textPhase === 2 ? "auto" : "none" }}
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255, 71, 87, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="bg-valentine-red text-white py-4 px-12 rounded-full text-2xl font-bold shadow-xl z-10 cursor-pointer"
        >
          HAAANNNNNNNNNNNN! 🥰
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ValentineProposal;
