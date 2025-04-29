
interface Material {
  title: string;
  description: string;
  type: "slide" | "modelo" | "recursos";
  url: string;
  icon: "presentation" | "figma" | "resources";
}

export const materialsData: Material[] = [
  {
    title: "Slides do Figma - Fundamentos",
    description: "Apresentação com conceitos básicos do Figma",
    type: "slide",
    url: "https://figma.com/file/slides-basics",
    icon: "presentation"
  },
  {
    title: "Slides do Figma - Componentes",
    description: "Apresentação sobre o uso de componentes no Figma",
    type: "slide",
    url: "https://figma.com/file/slides-components",
    icon: "presentation"
  },
  {
    title: "Modelo de WhatsApp",
    description: "Arquivo do Figma com modelo completo do WhatsApp",
    type: "modelo",
    url: "https://figma.com/file/whatsapp-template",
    icon: "figma"
  },
  {
    title: "Modelo do Pinterest",
    description: "Arquivo do Figma com modelo completo do Pinterest",
    type: "modelo",
    url: "https://figma.com/file/pinterest-template",
    icon: "figma"
  },
  {
    title: "Ícones para Interface",
    description: "Pacote de ícones para usar em seus projetos",
    type: "recursos",
    url: "https://figma.com/file/icon-pack",
    icon: "resources"
  },
  {
    title: "Imagens para Mockups",
    description: "Banco de imagens de alta qualidade para mockups",
    type: "recursos",
    url: "https://figma.com/file/mockup-images",
    icon: "resources"
  }
];
