import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check, Heart, ShieldCheck, Truck, Gift } from "lucide-react";
import product100Citas from "@/assets/product-100-citas.png";

const includes = [
  { icon: Heart, text: "100 citas únicas y creativas" },
  { icon: Gift, text: "Diseño premium con espiral" },
  { icon: Truck, text: "Envío gratis a toda LATAM" },
  { icon: ShieldCheck, text: "Garantía de satisfacción 30 días" },
];

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            <Heart className="w-4 h-4 text-rose fill-rose animate-heart-beat" />
            Comienza Hoy
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Tu historia de amor merece{" "}
            <span className="text-gold">100 capítulos más</span>
          </h2>
          <div className="decorative-line w-32 mx-auto mb-6" />
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            No dejes que la rutina apague la chispa. Invierte en los momentos que 
            realmente importan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary via-primary to-burgundy-dark rounded-3xl p-8 md:p-12 shadow-glow overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose/10 rounded-full blur-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              {/* Product image */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product100Citas}
                  alt="100 Citas Juntos"
                  className="w-56 md:w-72 drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Content */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-wider text-primary-foreground/70 mb-1">
                    Precio especial de lanzamiento
                  </p>
                  <div className="flex items-baseline gap-3 justify-center md:justify-start">
                    <span className="text-5xl md:text-6xl font-serif font-bold text-gold">
                      $49
                    </span>
                    <span className="text-xl text-primary-foreground/50 line-through">
                      $79
                    </span>
                    <span className="px-3 py-1 bg-gold text-accent-foreground text-xs font-bold rounded-full">
                      -38%
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {includes.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-primary-foreground/90">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="soft" 
                  size="xl" 
                  className="w-full bg-gold hover:bg-gold-light text-accent-foreground font-semibold shadow-gold"
                >
                  <Heart className="w-5 h-5" />
                  Ordenar Ahora
                </Button>
                
                <p className="mt-4 text-xs text-primary-foreground/60 text-center">
                  Pago seguro • Envío en 3-5 días hábiles
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            ¿Tienes preguntas?{" "}
            <a href="mailto:hola@momentum.com" className="text-primary font-medium hover:underline">
              Escríbenos
            </a>
          </p>
          <div className="flex justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span className="text-sm">Pago Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-gold" />
              <span className="text-sm">Envío Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold" />
              <span className="text-sm">Hecho con Amor</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
