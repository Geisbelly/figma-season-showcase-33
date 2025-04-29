
interface SocialLink {
  type: "linkedin" | "github" | "instagram" | "whatsapp" | "email" | "phone";
  url: string;
}

export interface Contact {
  name: string;
  role: string;
  photo: string;
  description: string;
  socialLinks: SocialLink[];
}

export const contactsData: Contact[] = [
  {
    name: "Geisbelly Souza",
    role: "Instrutora Principal",
    photo: "/placeholder.svg",
    description: "Designer UI/UX com mais de 2 anos de experiência.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com/in/geisbelly" },
      { type: "github", url: "https://github.com/geisbelly" },
      { type: "instagram", url: "https://instagram.com/geisbelly" },
      { type: "whatsapp", url: "https://wa.me/5563933006942" }
    ]
  },
  {
    name: "Levi Silva",
    role: "Instrutor Assistente",
    photo: "/placeholder.svg",
    description: "Desenvolvedor Front-end com foco em design de interfaces e experiência do usuário.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com/in/levisilva" },
      { type: "github", url: "https://github.com/levisilva" },
      { type: "email", url: "mailto:levi@example.com" },
      { type: "phone", url: "tel:+5500000000000" }
    ]
  },
  {
    name: "Carlos Mendes",
    role: "Coordenador do Curso",
    photo: "/placeholder.svg",
    description: "Professor universitário e pesquisador na área de design de interação e interfaces.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com/in/carlosmendes" },
      { type: "email", url: "mailto:carlos@example.com" },
      { type: "instagram", url: "https://instagram.com/carlosmendes" },
      { type: "whatsapp", url: "https://wa.me/5500000000000" }
    ]
  }
];
