import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20participar%20do%20piloto%20de%20assinaturas%20para%20academias.&utm_source=site&utm_medium=sticky_bar&utm_campaign=lp";

export const MobileStickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCadastro = () => {
    const element = document.getElementById("cadastro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg p-3">
      <div className="flex gap-2">
        <a
          href={WHATSAPP_LINK}
          data-event="whatsapp_click"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </a>
        <Button
          onClick={scrollToCadastro}
          data-event="sticky_cta_click"
          className="flex-1"
        >
          Quero participar
        </Button>
      </div>
    </div>
  );
};
