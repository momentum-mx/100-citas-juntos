import { motion } from "framer-motion";
import { BookOpen, Users, Heart } from "lucide-react";
import product100Citas from "@/assets/product-100-citas.png";
const steps = [{
  number: "01",
  icon: BookOpen,
  title: "Elige una Página",
  description: "Cada semana, seleccionen juntos una cita al azar o elijan según su humor."
}, {
  number: "02",
  icon: Users,
  title: "Planifiquen Juntos",
  description: "Cada cita incluye sugerencias para hacer la experiencia aún más especial."
}, {
  number: "03",
  icon: Heart,
  title: "Vivan el Momento",
  description: "Desconéctense del mundo y conéctense entre ustedes."
}];
const HowItWorks = () => {
  return <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -50,
          rotate: -5
        }} whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative flex justify-center">
            {/* Background decorations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full blur-2xl" />
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gold/30 rounded-full" />
            <div className="absolute bottom-10 left-10 w-32 h-32 border border-rose/20 rounded-full" />
            
            <motion.img alt="Libro 100 Citas Juntos" className="relative w-64 md:w-80 drop-shadow-2xl" whileHover={{
            scale: 1.05,
            rotate: 3
          }} transition={{
            duration: 0.3
          }} src="./src/assets/product-100-citas-sbg.png" />
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary mb-6">
              Cómo Funciona
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Tres pasos hacia{" "}
              <span className="text-gold">momentos mágicos</span>
            </h2>
            <div className="decorative-line w-24 mb-10" />

            <div className="space-y-8">
              {steps.map((step, index) => <motion.div key={step.number} initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.15
            }} viewport={{
              once: true
            }} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-burgundy-dark flex items-center justify-center shadow-elevated group-hover:shadow-glow transition-all duration-300">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-gold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-small text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;