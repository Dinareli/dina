import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Code, Palette, Zap, Target, Heart } from "lucide-react";

const skills = [
  "Landing Pages",
  "Design Responsivo", 
  "Otimização de Conversão",
  "React & Next.js",
  "Tailwind CSS",
  "Figma",
  "WordPress",
  "Google Analytics"
];

const services = [
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Código limpo e otimizado para performance máxima"
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Interfaces modernas que encantam e convertem"
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Projetos entregues em até 7 dias úteis"
  },
  {
    icon: Target,
    title: "Foco em Conversão",
    description: "Estratégias comprovadas para gerar mais vendas"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Sobre Mim</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Especialista em{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                resultados
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Sou especialista em criação de landing pages simples, bonitas e focadas em resultado. 
                Ajudo pequenos negócios, profissionais autônomos e infoprodutores a captarem mais 
                clientes online com páginas rápidas e que funcionam.
              </p>
              
              <p>
                Com mais de 3 anos de experiência em desenvolvimento web, domino as melhores 
                práticas de UX/UI e otimização de conversão. Cada projeto é único e desenvolvido 
                pensando no seu público-alvo e objetivos específicos.
              </p>

              <p>
                Meu foco é criar páginas que não apenas impressionam visualmente, mas que 
                realmente geram resultados para o seu negócio.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Minhas Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Value Propositions */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>100% responsivo para todos os dispositivos</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>Otimizado para SEO e velocidade</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>Integração com WhatsApp e redes sociais</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>Suporte completo pós-entrega</span>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;