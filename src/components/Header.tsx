import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Users,
  FileText,
  Mail,
  HelpCircle,
  Home,
  Video,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMembersSubmenuOpen, setIsMembersSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMembersSubmenuOpen(false);
  };

  const toggleMembersSubmenu = () =>
    setIsMembersSubmenuOpen((prev) => !prev);

  return (
    <header className="border-b border-border/40 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-background/80">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <Home className="w-5 h-5" />
          Curso de Figma
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Users className="w-4 h-4 mr-2" />
                  Integrantes
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[300px]">
                    <Link to="/members/2024.1" className="block p-2 hover:bg-accent rounded-md">Edição 2024.1</Link>
                    <Link to="/members/2024.2" className="block p-2 hover:bg-accent rounded-md">Edição 2024.2</Link>
                    <Link to="/members/2025.1" className="block p-2 hover:bg-accent rounded-md">Edição 2025.1</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/materials">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Materiais
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/videos">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Video className="w-4 h-4" /> Video Aulas
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Contato
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" /> Sobre
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-md absolute top-16 left-0 right-0 z-40">
          <nav className="flex flex-col gap-2 p-4">

            {/* Integrantes com submenu */}
            <button
              onClick={toggleMembersSubmenu}
              className="flex items-center justify-between text-left w-full py-2 text-base font-medium"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Integrantes
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMembersSubmenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMembersSubmenuOpen && (
              <div className="ml-6 flex flex-col gap-1">
                <Link to="/members/2024.1" onClick={closeMobileMenu} className="flex items-center gap-2 text-sm py-1">
                  <Users className="w-4 h-4" />
                  Edição 2024.1
                </Link>
                <Link to="/members/2024.2" onClick={closeMobileMenu} className="flex items-center gap-2 text-sm py-1">
                  <Users className="w-4 h-4" />
                  Edição 2024.2
                </Link>
                <Link to="/members/2025.1" onClick={closeMobileMenu} className="flex items-center gap-2 text-sm py-1">
                  <Users className="w-4 h-4" />
                  Edição 2025.1
                </Link>
              </div>
            )}

            <Link to="/materials" onClick={closeMobileMenu} className="flex items-center gap-2 text-base py-2">
              <FileText className="w-4 h-4" />
              Materiais
            </Link>
            <Link to="/videos" onClick={closeMobileMenu} className="flex items-center gap-2 text-base py-2">
              <Video className="w-4 h-4" />
              Video Aulas
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className="flex items-center gap-2 text-base py-2">
              <Mail className="w-4 h-4" />
              Contato
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className="flex items-center gap-2 text-base py-2">
              <HelpCircle className="w-4 h-4" />
              Sobre
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
