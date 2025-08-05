import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigado!",
    });

    // Limpar formulário
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre seus serviços de landing pages.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Entre em Contato</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vamos criar algo{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              incrível
            </span>{" "}
            juntos?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em uma landing page que converte? 
            Entre em contato e vamos conversar sobre seu projeto!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e receba uma resposta em até 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Seu nome aqui"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Conte-me sobre seu projeto, objetivos e prazos..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  Enviar Mensagem
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6">
            
            {/* WhatsApp Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={handleWhatsApp}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-green-600 transition-colors">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Resposta rápida e atendimento personalizado
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Conversar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground text-sm">
                      contato@landingexpert.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground text-sm">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info Box */}
            <div className="bg-gradient-primary p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-3">Orçamento Gratuito</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Receba uma análise completa do seu projeto sem compromisso. 
                Vamos conversar sobre suas necessidades e como posso ajudar 
                seu negócio a crescer online.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;