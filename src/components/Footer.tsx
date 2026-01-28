import { Heart } from "lucide-react";
import logoMomentum from "@/assets/logo-momentum.jpg";

const Footer = () => {
  return (
    <footer className="py-12 gradient-burgundy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img 
              src={logoMomentum} 
              alt="Momentum" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <span className="font-serif text-xl font-semibold tracking-wide block">
                MOMENTUM
              </span>
              <span className="text-xs text-primary-foreground/60">
                Sé víctima de tu éxito
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-gold transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Contacto
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-gold fill-gold animate-heart-beat" />
            <span>para parejas</span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Momentum. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
