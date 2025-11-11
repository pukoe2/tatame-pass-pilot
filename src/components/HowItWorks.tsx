import { Button } from "@/components/ui/button";
import { UserPlus, ListChecks, Share2 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Cadastre sua academia",
    description: "Preencha dados básicos e conecte a forma de recebimento.",
  },
  {
    number: 2,
    icon: ListChecks,
    title: "Crie seus planos",
    description: "Ilimitado, X aulas/semana, kids/adulto, com regras de congelamento.",
  },
  {
    number: 3,
    icon: Share2,
    title: "Compartilhe o link",
    description: "Alunos assinam em 30 segundos por cartão ou PIX. Você acompanha tudo.",
  },
];

export const HowItWorks = () => {
  const scrollToCadastro = () => {
    const element = document.getElementById("cadastro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-alt-bg">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToCadastro}
            data-event="flow_cta_click"
            size="lg"
          >
            Quero participar do piloto
          </Button>
        </div>
      </div>
    </section>
  );
};
