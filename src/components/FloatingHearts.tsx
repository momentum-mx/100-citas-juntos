import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = [
  { size: 16, x: "10%", y: "20%", delay: 0, duration: 4 },
  { size: 12, x: "85%", y: "15%", delay: 1, duration: 5 },
  { size: 20, x: "75%", y: "70%", delay: 2, duration: 4.5 },
  { size: 14, x: "15%", y: "75%", delay: 0.5, duration: 5.5 },
  { size: 10, x: "90%", y: "45%", delay: 1.5, duration: 4 },
  { size: 18, x: "5%", y: "50%", delay: 2.5, duration: 5 },
  { size: 8, x: "50%", y: "85%", delay: 0.8, duration: 4.2 },
  { size: 15, x: "95%", y: "80%", delay: 1.8, duration: 5.2 },
];

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: heart.x, top: heart.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1, 0.8],
            y: [0, -30, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            style={{ width: heart.size, height: heart.size }}
            className="text-rose fill-rose/30"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
