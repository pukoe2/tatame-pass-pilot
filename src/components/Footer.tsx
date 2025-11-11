import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20TatamePass.&utm_source=site&utm_medium=footer&utm_campaign=lp";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4">TatamePass</div>
            <p className="text-sm text-background/80">
              Planos por assinatura para academias de artes marciais.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Política de Privacidade (LGPD)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@tatamezero.com.br"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contato@tatamezero.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} TatamePass. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
