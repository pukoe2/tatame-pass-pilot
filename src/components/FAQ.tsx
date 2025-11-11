import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "PIX é recorrente automático?",
    answer:
      "Não. Tratamos como cobrança mensal inteligente com lembretes. Cartão renova automaticamente.",
  },
  {
    question: "Quem emite a nota fiscal ao aluno?",
    answer:
      "A própria academia. A plataforma emite nota apenas da taxa de serviço para a academia, quando aplicável.",
  },
  {
    question: "Quando recebo o dinheiro?",
    answer:
      "PIX: confirmação imediata. Cartão: conforme regras do adquirente; antecipação disponível.",
  },
  {
    question: "Posso congelar um plano?",
    answer: "Sim. Defina regras de congelamento por período e reativação.",
  },
  {
    question: "E se o aluno atrasar?",
    answer:
      "Cartão: novas tentativas automáticas. PIX: lembretes. Após a carência, o acesso é suspenso até regularização.",
  },
  {
    question: "Quais bandeiras de cartão aceitam?",
    answer: "As principais bandeiras do mercado (conforme parceiro de processamento).",
  },
  {
    question: "Preciso de CNPJ para começar?",
    answer:
      "Recomendado para operar e receber oficialmente. No piloto, avaliamos caso a caso.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Sem fidelidade. Seus dados podem ser exportados a qualquer momento.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-alt-bg">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-muted-foreground">Perguntas frequentes</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                data-event="faq_open"
                data-question={item.question}
                className="text-left"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
