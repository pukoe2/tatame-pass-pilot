import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20participar%20do%20piloto%20de%20assinaturas%20para%20academias.&utm_source=site&utm_medium=header&utm_campaign=lp";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">TatamePass</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <a
              href={WHATSAPP_LINK}
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Falar no WhatsApp
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("cadastro")}
              data-event="hero_cta_click"
              size="sm"
            >
              Cadastrar agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2"
            >
              FAQ
            </button>
            <a
              href={WHATSAPP_LINK}
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Falar no WhatsApp
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("cadastro")}
              data-event="hero_cta_click"
              className="w-full"
            >
              Cadastrar agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
