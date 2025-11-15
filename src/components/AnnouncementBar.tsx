import { Megaphone } from "lucide-react";

export const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 text-center">
      <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2">
        <Megaphone className="h-4 w-4 flex-shrink-0" />
        <p className="text-sm font-medium">
          Lançamento no Brasil: 1º mês sem taxa para cadastros até 30 de Novembro.
        </p>
      </div>
    </div>
  );
};
