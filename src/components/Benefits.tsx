import { motion } from "framer-motion";
import { Heart, Sparkles, Calendar, Gift, Star, Flame } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Conexión Profunda",
    description: "Cada cita está diseñada para fortalecer el vínculo emocional entre ustedes.",
    color: "from-rose to-rose-light",
  },
  {
    icon: Sparkles,
    title: "Experiencias Únicas",
    description: "Desde aventuras al aire libre hasta noches íntimas en casa.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Calendar,
    title: "Todo un Año",
    description: "100 ideas significa que nunca se quedarán sin planes especiales.",
    color: "from-primary to-burgundy-light",
  },
  {
    icon: Gift,
    title: "Regalo Perfecto",
    description: "Ideal para aniversarios, cumpleaños o simplemente porque sí.",
    color: "from-rose-light to-blush",
  },
];

const stats = [
  { icon: Star, value: "4.9", label: "Calificación" },
  { icon: Heart, value: "2.5K+", label: "Parejas felices" },
  { icon: Flame, value: "100", label: "Ideas únicas" },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary mb-4">
            <Heart className="w-4 h-4 text-rose fill-rose" />
            ¿Por qué elegirlo?
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Más que un libro,{" "}
            <span className="text-gold">son memorias</span>
          </h2>
          <div className="decorative-line w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border hover:border-gold/30 overflow-hidden">
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-small text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon className="w-5 h-5 text-gold group-hover:animate-heart-beat" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
