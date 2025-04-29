
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Users, FileText, ListOrdered, Mail, HelpCircle, Home, Video } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/80">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <Home className="w-5 h-5" />
            Curso de Figma
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Users className="w-4 h-4 mr-2" />
                Integrantes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/members/2024.1" className="block p-3 hover:bg-accent rounded-md">
                    Edição 2024.1
                  </Link>
                  <Link to="/members/202.2" className="block p-3 hover:bg-accent rounded-md">
                    Edição 2023.2
                  </Link>
                  <Link to="/members/2023.1" className="block p-3 hover:bg-accent rounded-md">
                    Edição 2023.1
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/materials">
                <Button variant="ghost" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Materiais
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/lessons">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ListOrdered className="w-4 h-4" />
                  Lições
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/videos">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Video Aulas
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contato
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <Button variant="ghost" className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Sobre
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
