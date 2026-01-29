import { SendHorizonal, Mail, Facebook, Heart, Instagram } from "lucide-react";
import logoMomentum from "@/assets/Momentum-blanco.png";

const Footer = () => {
  return (
    <footer className="py-12 gradient-burgundy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logoMomentum} 
              alt="Momentum" 
              className="h-24 w-24 rounded-lg object-cover"
            />
            <div>
              <span className="font-noir text-xl font-medium tracking-wide block relative top-[8px] right-[15px]">
                MOMENTUM
              </span>
              <span className="text-xs text-primary-foreground/60 relative bottom-[2px] right-[16px]">
                Sé víctima de tu éxito
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <span></span>
            <Facebook className="w-4 h-4 text-white" onClick={() => window.open("https://www.facebook.com/momemtumlmx", "_blank")} />
            <span></span>
            <Instagram className="w-4 h-4 text-white" onClick={() => window.open("https://www.instagram.com/momentumexico/", "_blank")} />
            <span></span>
            <SendHorizonal className="w-4 h-4 text-white" onClick={() => window.open("mailto:momentumlmexico@gmail.com", "_blank")} />
            <span></span>
            <Mail className="w-4 h-4 text-white" onClick={() => window.open("mailto:momentumlmexico@gmail.com", "_blank")} />
            <span></span>

            {/* <a href="#" className="hover:text-gold transition-colors">
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
            </a> */}
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
