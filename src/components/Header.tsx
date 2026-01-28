import { motion } from "framer-motion";
import { Button } from "./ui/button";
import logoMomentum from "@/assets/Momentum.jpg";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoMomentum} 
            alt="Momentum" 
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span className="font-noir text-xl font-semibold text-primary tracking-wide leading-none ">
            MOMENTUM
          </span>
        </div>
        <Button variant="hero" size="default" onClick={() => window.open("https://www.instagram.com/momentumexico/", "_blank")}>
          Comprar Ahora
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
