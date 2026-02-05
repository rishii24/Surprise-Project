import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import QuestionSlide from "./components/QuestionSlide";
import ValentineProposal from "./components/ValentineProposal";
import ThankYou from "./components/ThankYou";
import { Heart } from "lucide-react";

// Import GIFs
import greetGif from "./assets/dudu_greet.gif";
import phoneGif from "./assets/dudu_on_phone.gif";
import phoneGif2 from "./assets/bubu_phone.gif";
import eatGif from "./assets/dudu_bubu_eat.gif";
import gymGif from "./assets/dudu_work_bubu.gif";
import danceGif from "./assets/dudu_dance.gif";
import danceGif2 from "./assets/bubu_dance.gif";
import requestGif from "./assets/dudu_request_2.gif";
import kissGif from "./assets/dudu_bubu_kiss.gif";
import thinkGif from "./assets/dudu_think.gif";
import lionGif from "./assets/dudu_lion.gif";
import naughtyGif from "./assets/bubu_naughty.gif";
import poutGif from "./assets/dudu_pout.gif";
import nailsGif from "./assets/dudu_bubu_nails.gif";
import callGif from "./assets/dudu_call.gif";
import PiGif from "./assets/dudu_bubu_pi.gif";
import cryGif from "./assets/bubu_cry.gif";
import ShockGif from "./assets/bubu_shock.gif";

const QUESTIONS = [
  {
    text: "Kya jyu ko meri bheji hui reels seeee karna pasand hai?",
    gif: phoneGif,
    gif2: phoneGif2,
  },
  {
    text: "Kya jyuuuu ko mere se chipuuuu karna pasand hai?",
    gif: gymGif,
  },
  {
    text: "Kya jyunnnn koooo mere sath thumak ke danassss karna pasand hai?",
    gif: danceGif,
    gif2: danceGif2,
  },
  {
    text: "Kya jyu manti hoeeee ki main Sher hoooon ?",
    gif: lionGif,
  },
  {
    text: "Kya jyu ko mere satn fuuduu khana pasand hai ?",
    gif: eatGif,
  },
  {
    text: "Kya jyuuuu hameshaaaa mere sath badmasiiii crowgiiii?",
    gif: naughtyGif,
  },
  {
    text: "Kya mainnnn jyu ko aise chuchuuuu kara sakta hooon ?",
    gif: PiGif,
  },
  {
    text: "Kya mainnnn aise jyu ka dhaynuuuu rakh sakta hooon ?",
    gif: nailsGif,
  },
  {
    text: "Ab ek final saballlllll, r jyu taiyaaaar hoeeeeee ?",
    gif: ShockGif,
  },
];

const DECORATIVE_GIFS = [poutGif, nailsGif, thinkGif, cryGif];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [floatingGifs, setFloatingGifs] = useState([]);

  const nextSlide = () => setCurrentSlide((prev) => prev + 1);

  // Generate random positions for decorative gifs on mount
  useEffect(() => {
    const gifs = DECORATIVE_GIFS.map((gif, index) => ({
      id: index,
      src: gif,
      top: Math.random() * 80 + 10 + "%",
      left: Math.random() * 80 + 10 + "%",
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
          gif2={QUESTIONS[questionIndex].gif2}
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
    <div className="h-screen w-screen bg-linear-to-br from-pink-200 via-pink-100 to-rose-200 overflow-hidden relative font-sans text-gray-900">
      {/* Background Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute drop-shadow-xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360,
              opacity: 0.8,
            }}
            animate={{
              y: -200,
              x: `calc(${Math.random() * 200 - 100}px)`,
              rotate: Math.random() * 360 + 180,
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              left: Math.random() * 100 + "%",
              color: ["#ff4757", "#ff6b81", "#ff7eb3", "#e84393", "#fd79a8"][
                Math.floor(Math.random() * 5)
              ],
            }}
          >
            <Heart size={Math.random() * 40 + 20} fill="currentColor" />
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
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              top: item.top,
              left: item.left,
              width: "150px",
              height: "150px",
            }}
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
