
interface Material {
  title: string;
  description: string;
  type: "slide" | "modelo" | "recursos";
  url: string;
  icon: "presentation" | "figma" | "resources";
  edition: string;
}

export const materialsData: Material[] = [
  {
    title: "Slides do Figma Whatsapp - Fundamentos",
    description: "Apresentação com conceitos básicos do Figma no Whatsapp",
    type: "slide",
    url: "https://figma.com/file/slides-basics",
    icon: "presentation",
    edition: "2024.1"
  },
  {
    title: "Slides do Figma Pinterest - Fundamentos",
    description: "Apresentação com conceitos básicos do Figma no Pinterest",
    type: "slide",
    url: "https://www.figma.com/proto/f0ZcrkczcnMaZjzTm26sia/Slides---Curso-de-Figma-%7C-Pinterest?node-id=1016-532&t=4SgJ8MewW9BDlgQX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1016%3A532&show-proto-sidebar=1",
    icon: "presentation",
    edition: "2025.1"
  },
  
  {
    title: "Slides do Figma - Componentes",
    description: "Apresentação sobre o uso de componentes no Figma no ",
    type: "slide",
    url: "https://figma.com/file/slides-components",
    icon: "presentation",
    edition: "2024.2"
  },
  {
    title: "Modelo de WhatsApp",
    description: "Arquivo do Figma com modelo completo do WhatsApp",
    type: "modelo",
    url: "https://figma.com/file/whatsapp-template",
    icon: "figma",
    edition: "2024.1"
  },
  {
    title: "Modelo do Pinterest",
    description: "Arquivo do Figma com modelo completo do Pinterest",
    type: "modelo",
    url: "https://www.figma.com/design/pHTNz1a0Rfay87AFXkF00x/Pinterest?node-id=0-1&t=wFMGv1wewlKCfWFX-1",
    icon: "figma",
    edition: "2025.1"
  },
  {
    title: "Imagens para Mockups",
    description: "Banco de imagens de alta qualidade para mockups",
    type: "recursos",
    url: "https://figma.com/file/mockup-images",
    icon: "resources",
    edition: "2024.2"
  },
  {
    title: "Imagens para Mockups",
    description: "Banco de imagens de alta qualidade para mockups",
    type: "recursos",
    url: "https://figma.com/file/mockup-images",
    icon: "resources",
    edition: "2024.1"
  },
  {
    title: "Modelo de WhatsApp",
    description: "Arquivo do Figma com modelo completo do WhatsApp",
    type: "modelo",
    url: "https://figma.com/file/whatsapp-template",
    icon: "figma",
    edition: "2024.2"
  }
];
