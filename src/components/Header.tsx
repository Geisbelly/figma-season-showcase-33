
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Figma Masterclass</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost">Temporadas</Button>
          <Button variant="ghost">Recursos</Button>
          <Button variant="default">Começar Agora</Button>
        </nav>
      </div>
    </header>
  );
};
