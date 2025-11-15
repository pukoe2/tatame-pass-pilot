import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20participar%20do%20piloto%20de%20assinaturas%20para%20academias.&utm_source=site&utm_medium=hero&utm_campaign=lp";

export const Hero = () => {
  const scrollToCadastro = () => {
    const element = document.getElementById("cadastro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-16 md:py-24 bg-alt-bg">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Venda planos de assinatura da sua academia no cartão, sem dor de cabeça.
              </h1>
              <p className="text-lg text-muted-foreground">
                Uma plataforma para vender, renovar e controlar planos. Receba no cartão com
                renovação automática ou via PIX com lembretes inteligentes.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={scrollToCadastro}
                data-event="hero_cta_click"
                size="lg"
                className="w-full md:w-auto text-base px-8"
              >
                Cadastrar minha academia
              </Button>
              <p className="text-sm text-muted-foreground">
                Leva 3 minutos. Sem compromisso.
              </p>
              <a
                href={WHATSAPP_LINK}
                data-event="whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full md:w-auto">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium">Cartão com renovação automática</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium">PIX com confirmação imediata</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium">Emissão de NF pela própria academia</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroMockup}
              alt="Mockup do checkout de assinatura no celular"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
