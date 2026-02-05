import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import QuestionSlide from './components/QuestionSlide';
import ValentineProposal from './components/ValentineProposal';
import ThankYou from './components/ThankYou';
import { Heart } from 'lucide-react';

// Import GIFs
import greetGif from './assets/dudu_greet.gif';
import phoneGif from './assets/dudu_on_phone.gif';
import gymGif from './assets/dudu_work_bubu.gif';
import danceGif from './assets/dudu_dance.gif';
import requestGif from './assets/dudu_request_2.gif';
import kissGif from './assets/dudu_bubu_kiss.gif';
import thinkGif from './assets/dudu_think.gif';
import styleGif from './assets/dudu_style.gif';
import naughtyGif from './assets/bubu_naughty.gif';
import poutGif from './assets/dudu_pout.gif';
import nailsGif from './assets/dudu_bubu_nails.gif';
import callGif from './assets/dudu_call.gif';
import cryGif from './assets/bubu_cry.gif';

const QUESTIONS = [
  {
    text: "Do you like our late night talks?",
    gif: phoneGif
  },
  {
    text: "Is the gym your second favorite place after being with me?",
    gif: gymGif
  },
  {
    text: "Do you promise to always laugh at my bad jokes?",
    gif: danceGif
  },
  {
    text: "Can I be the one to spoil you?",
    gif: styleGif
  },
  {
    text: "Will you tolerate my chaotic energy?",
    gif: naughtyGif
  },
  {
    text: "Do you promise not to ignore my texts?",
    gif: callGif
  }
];

const DECORATIVE_GIFS = [poutGif, nailsGif, thinkGif, cryGif];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [floatingGifs, setFloatingGifs] = useState([]);

  const nextSlide = () => setCurrentSlide(prev => prev + 1);

  // Generate random positions for decorative gifs on mount
  useEffect(() => {
    const gifs = DECORATIVE_GIFS.map((gif, index) => ({
      id: index,
      src: gif,
      top: Math.random() * 80 + 10 + '%',
      left: Math.random() * 80 + 10 + '%',
      scale: Math.random() * 0.4 + 0.3,
      delay: Math.random() * 2,
    }));
    setFloatingGifs(gifs);
  }, []);

  // Determine which component to render
  const renderSlide = () => {
    if (currentSlide === 0) {
      return <Intro onNext={nextSlide} gif={greetGif} />;
    }
    
    const questionIndex = currentSlide - 1;
    
    if (questionIndex < QUESTIONS.length) {
      return (
        <QuestionSlide 
          question={QUESTIONS[questionIndex].text} 
          gif={QUESTIONS[questionIndex].gif}
          onYes={nextSlide}
        />
      );
    }
    
    if (currentSlide === QUESTIONS.length + 1) {
      return <ValentineProposal onYes={nextSlide} gif={requestGif} />;
    }
    
    return <ThankYou gif={kissGif} />;
  };

  return (
    <div className="h-screen w-screen bg-linear-to-br from-pink-50 via-white to-pink-100 overflow-hidden relative font-sans text-gray-900">
      
      {/* Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-200/50"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: -100, 
              x: `calc(${Math.random() * 100}px)`, 
              rotate: Math.random() * 360 
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            style={{ left: Math.random() * 100 + "%" }}
          >
           <Heart size={Math.random() * 50 + 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Scattered Random GIFs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        {floatingGifs.map((item) => (
           <motion.img
             key={item.id}
             src={item.src}
             className="absolute object-contain"
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 0.6, scale: item.scale, y: [0, -20, 0] }}
             transition={{ 
               opacity: { duration: 1, delay: item.delay },
               scale: { duration: 1, delay: item.delay },
               y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
             }}
             style={{ top: item.top, left: item.left, width: '150px', height: '150px' }}
           />
        ))}
      </div>

      <main className="relative z-10 w-full h-full max-w-4xl mx-auto flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </main>
      
    </div>
  );
}

export default App;
