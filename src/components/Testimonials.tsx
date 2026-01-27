import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";
import coupleMoment from "@/assets/couple-moment.jpg";

const testimonials = [
  {
    quote: "Después de 8 años juntos, pensamos que lo habíamos hecho todo. Este libro nos demostró lo contrario.",
    author: "María & Carlos",
    location: "Ciudad de México",
    avatar: "M",
  },
  {
    quote: "El regalo de aniversario perfecto. Cada cita es una oportunidad de enamorarnos de nuevo.",
    author: "Ana & Roberto",
    location: "Buenos Aires",
    avatar: "A",
  },
  {
    quote: "Simple, elegante y efectivo. Nuestras tardes de domingo nunca volverán a ser aburridas.",
    author: "Laura & Diego",
    location: "Madrid",
    avatar: "L",
  },
];

const Testimonials = () => {
  return (
    <section id="Testimonial" className="py-24 gradient-romantic relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 border border-gold/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-rose/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur text-sm font-medium text-primary mb-4">
            <Heart className="w-4 h-4 text-rose fill-rose" />
            Historias de Amor
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Parejas que{" "}
            <span className="text-gold">confían en nosotros</span>
          </h2>
          <div className="decorative-line w-32 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-background rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border h-full">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-body text-foreground mb-6 font-serif italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-burgundy-dark flex items-center justify-center text-primary-foreground font-serif font-semibold text-lg shadow-soft">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
            <img
              src={coupleMoment}
              alt="Pareja disfrutando de una cita"
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
              <p className="font-serif italic text-primary-foreground text-xl md:text-3xl leading-relaxed">
                "El amor no se encuentra, se construye día a día"
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {[1, 2, 3].map((i) => (
                  <Heart key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
