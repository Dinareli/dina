import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Sparkles } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Studio Whillet",
    description: "Página de agendamento com botão direto pro WhatsApp. Foco em conversão para profissionais da área estética.",
    image: project1,
    category: "Beleza & Estética",
    link: "https://studio-whillet.vercel.app/",
    technologies: ["React", "Vite", "WhatsApp API"]
  },
  {
    id: 2,
    title: "Escola Conecta",
    description: "Landing page para cursos online com sistema de inscrições e pagamento integrado.",
    image: project2,
    category: "Educação",
    link: "https://example.com/escola-conecta",
    technologies: ["Next.js", "Stripe", "CMS"]
  },
  {
    id: 3,
    title: "Nutri Mariana",
    description: "Página de consulta nutricional com agendamento online e formulário de avaliação.",
    image: project3,
    category: "Saúde",
    link: "https://example.com/nutri-mariana",
    technologies: ["React", "Calendar API", "Forms"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Meus Trabalhos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Projetos que{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              convertem
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é único e desenvolvido com foco em resultados. 
            Veja alguns exemplos do meu trabalho e como posso ajudar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-md"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-accent text-white px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Ver Página
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Gostou do que viu? Vamos criar algo incrível para o seu negócio!
          </p>
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;