import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Heart, Sparkles } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import libroCitas from "@/assets/product-100-citas-sbg.png";

const Hero = () => {
  return <section className="relative min-h-screen gradient-hero flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-light/20 rounded-full blur-3xl" />
      </div>
      
      <FloatingHearts />

      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-primary">Momentum Presenta</span>
            </motion.div>
            
            <h1 className="heading-display text-foreground mb-6">
              <span className="block relative top-[18px]">100 Citas Juntos</span>
              {/* <span className="text-elegant text-gold block mt-2">Juntos</span> */}
            </h1>
            
            <div className="decorative-line w-24 mx-auto lg:mx-0 mb-6" />
            
            <p className="text-body text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Redescubre el amor con 100 experiencias únicas diseñadas para crear 
              momentos inolvidables. Cada página es una invitación a conectar más 
              profundamente con tu pareja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group" onClick={() => window.open("https://www.instagram.com/momentumexico/", "_blank")}>
                <Heart className="w-5 h-5 group-hover:animate-heart-beat" />
                Ordenar Ahora — $399
              </Button>
              <Button variant="elegant" size="xl" onClick={() => {document.getElementById("Testimonial")?.scrollIntoView({ behavior: "smooth" });}}>
                Ver Experiencias
              </Button>
            </div>

            {/* <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 1
          }} className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-rose to-rose-light border-2 border-background flex items-center justify-center shadow-soft">
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                  </div>)}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">+2,500 parejas</p>
                <p className="text-xs text-muted-foreground">creando recuerdos juntos</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Product Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50,
          rotateY: -15
        }} animate={{
          opacity: 1,
          x: 0,
          rotateY: 0
        }} transition={{
          duration: 1,
          delay: 0.4
        }} className="order-1 lg:order-2 relative flex justify-center">
            {/* Glow effect behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 via-rose/30 to-gold/20 rounded-full blur-3xl animate-pulse-soft" />
            </div>
            
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-gold/20 rounded-full animate-spin-slow" />
            </div>

            {/* Product */}
            <motion.div animate={{
            y: [0, -15, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="relative z-10">
              <img alt="100 Citas Juntos - Libro de experiencias románticas" className="w-72 md:w-96 drop-shadow-2xl" src={libroCitas} />
              
              {/* Floating badges */}
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 1.2
            }} className="absolute -right-4 top-1/4 bg-gold text-accent-foreground px-4 py-2 rounded-full shadow-gold text-sm font-semibold">
                ¡Compralo!
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 1.4
            }} className="absolute -left-4 bottom-1/4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-elevated text-sm font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4 fill-current" />
                100 Ideas
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-card">
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>;
};
export default Hero;