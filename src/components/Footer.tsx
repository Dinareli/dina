import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        
        {/* Back to Top Button */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <Button
            variant="default"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full shadow-lg hover:shadow-xl"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Landing Expert</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Especialista em landing pages que convertem. 
              Transformando ideias em resultados digitais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2 flex flex-col items-center">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                Início
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                Portfólio
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                Sobre
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>dina.devweb@gmail.com</p>
              <p>(11) 95945-1913</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Landing Expert. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>e muito café</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;