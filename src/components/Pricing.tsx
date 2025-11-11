import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const scrollToCadastro = () => {
    const element = document.getElementById("cadastro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precos" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preços</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Sem mensalidade</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Taxa por transação</p>
                  <p className="text-sm text-muted-foreground">Taxa do cartão + 1,99%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">PIX</p>
                  <p className="text-sm text-muted-foreground">0,5% por operação concluída</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Antecipação de cartão opcional. Taxas de bandeiras não incluídas. Emissão de NF ao
                aluno feita pela academia.
              </p>
            </div>

            <Button
              onClick={scrollToCadastro}
              data-event="pricing_cta_click"
              size="lg"
              className="w-full"
            >
              Cadastrar agora a sua Academia
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
