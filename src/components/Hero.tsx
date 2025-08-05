import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Especialista em Landing Pages</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Landing pages que{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              vendem
            </span>{" "}
            para pequenos negócios e infoprodutores
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformo ideias em páginas profissionais que captam clientes e aumentam suas vendas.
            Design moderno, foco em conversão e resultados garantidos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="group"
            >
              Ver Portfólio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Fale Comigo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">+50</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Entrega Rápida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;