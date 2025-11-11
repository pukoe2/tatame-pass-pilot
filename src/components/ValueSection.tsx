import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Shield, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Previsibilidade de caixa",
    description: "Assinaturas renovam sozinhas no cartão.",
  },
  {
    icon: Zap,
    title: "PIX sem atrito",
    description: "Link de pagamento com confirmação imediata e lembretes automáticos.",
  },
  {
    icon: Shield,
    title: "Menos cobrança manual",
    description: "Regras claras de atraso, suspensão e reativação.",
  },
  {
    icon: LayoutDashboard,
    title: "Tudo no mesmo lugar",
    description: "Planos, reservas de aula e relatórios.",
  },
];

export const ValueSection = () => {
  const scrollToCadastro = () => {
    const element = document.getElementById("cadastro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="value" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que as academias estão migrando
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToCadastro}
            data-event="mid_cta_click"
            size="lg"
          >
            Cadastrar agora a sua Academia
          </Button>
        </div>
      </div>
    </section>
  );
};
