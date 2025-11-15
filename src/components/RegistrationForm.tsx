import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20participar%20do%20piloto%20de%20assinaturas%20para%20academias.&utm_source=site&utm_medium=form&utm_campaign=lp";

export const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nomeAcademia: "",
    responsavel: "",
    whatsapp: "",
    email: "",
    cidadeUF: "",
    modalidade: "",
    numeroAlunos: "",
    formaCobranca: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utmSource: urlParams.get("utm_source") || "",
      utmMedium: urlParams.get("utm_medium") || "",
      utmCampaign: urlParams.get("utm_campaign") || "",
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form submitted:", formData);

    toast({
      title: "Cadastro realizado!",
      description: "Recebemos seus dados. Em breve entraremos em contato.",
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="cadastro" className="py-16 md:py-24">
        <div className="container mx-auto max-w-2xl px-4">
          <Card className="p-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Cadastro recebido!</h3>
              <p className="text-muted-foreground">
                Recebemos seus dados. Em breve entraremos em contato para os próximos passos do
                piloto.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="mt-4">
                Falar no WhatsApp
              </Button>
            </a>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="cadastro" className="py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <Card className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Cadastre agora sua academia</h2>
            <p className="text-sm text-muted-foreground">
              Leva 3 minutos. Sem compromisso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nomeAcademia">Nome da academia *</Label>
              <Input
                id="nomeAcademia"
                required
                value={formData.nomeAcademia}
                onChange={(e) => setFormData({ ...formData, nomeAcademia: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="responsavel">Responsável *</Label>
              <Input
                id="responsavel"
                required
                value={formData.responsavel}
                onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidadeUF">Cidade/UF *</Label>
              <Input
                id="cidadeUF"
                placeholder="São Paulo/SP"
                required
                value={formData.cidadeUF}
                onChange={(e) => setFormData({ ...formData, cidadeUF: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modalidade">Modalidade principal *</Label>
              <Select
                required
                value={formData.modalidade}
                onValueChange={(value) => setFormData({ ...formData, modalidade: value })}
              >
                <SelectTrigger id="modalidade">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jiu-jitsu">Jiu-Jitsu</SelectItem>
                  <SelectItem value="muay-thai">Muay Thai</SelectItem>
                  <SelectItem value="judo">Judo</SelectItem>
                  <SelectItem value="mma">MMA</SelectItem>
                  <SelectItem value="outras">Outras</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="numeroAlunos">Nº estimado de alunos *</Label>
              <Select
                required
                value={formData.numeroAlunos}
                onValueChange={(value) => setFormData({ ...formData, numeroAlunos: value })}
              >
                <SelectTrigger id="numeroAlunos">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<50">&lt;50</SelectItem>
                  <SelectItem value="50-150">50–150</SelectItem>
                  <SelectItem value="150-300">150–300</SelectItem>
                  <SelectItem value="300+">300+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="formaCobranca">Como cobra hoje? *</Label>
              <Select
                required
                value={formData.formaCobranca}
                onValueChange={(value) => setFormData({ ...formData, formaCobranca: value })}
              >
                <SelectTrigger id="formaCobranca">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cartao">Cartão</SelectItem>
                  <SelectItem value="pix">PIX</SelectItem>
                  <SelectItem value="dinheiro">Dinheiro</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" data-event="form_submit" size="lg" className="w-full">
              Enviar cadastro
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
