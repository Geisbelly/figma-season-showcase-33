
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
    name: "Geisbelly Victória",
    role: "Instrutora Líder",
    photo: "/public/geisbelly.jpg",
    description: "Designer UI/UX, desenvolvedora com mais de 1 anos de experiência.",
    socialLinks: [
      { type: "linkedin", url: "https://linkedin.com/in/geisbelly" },
      { type: "github", url: "https://github.com/geisbelly" },
      { type: "email", url: "mailto:geisbelly19@gmail.com" },
      { type: "instagram", url: "https://instagram.com/geisbelly" },
      { type: "whatsapp", url: "https://wa.me/5563933006942" }
    ]
  },
  {
    name: "Levi Luz",
    role: "Instrutor Principal",
    photo: "/public/levi.jpeg",
    description: "Design de interfaces e experiência do usuário, com mais de 1 ano e experiência.",
    socialLinks: [
      { type: "linkedin", url: "https://www.linkedin.com/in/levi-luz-4384362b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { type: "github", url: "https://github.com/levisilva" },
      { type: "email", url: "leviluzbr@gmail.com" },
      { type: "phone", url: "tel:+5563984424488" }
    ]
  },
  {
    name: "João Pedro",
    role: "Instrutor Assistente",
    photo: "/public/jp.jpeg",
    description: "Designer UI/UX, desenvolvedor com mais de 1 anos de experiência.",
    socialLinks: [
      { type: "linkedin", url: "https://www.linkedin.com/in/joao-pedro-ribeiro-batista-araujo-1583b1332/?originalSubdomain=br" },
      { type: "email", url: "mailto:jpedro204jp@rede.ulbra.br" },
      { type: "instagram", url: "https://www.instagram.com/jp_batista20/" },
      { type: "whatsapp", url: "https://wa.me/55639999122501" }
    ]
  }
  },
  {
    name: "João Pedro",
    role: "Instrutor Assistente",
    photo: "/public/jp.jpeg",
    description: "Designer UI/UX, desenvolvedor com mais de 1 anos de experiência.",
    socialLinks: [
      { type: "linkedin", url: "https://www.linkedin.com/in/joao-pedro-ribeiro-batista-araujo-1583b1332/?originalSubdomain=br" },
      { type: "email", url: "mailto:jpedro204jp@rede.ulbra.br" },
      { type: "instagram", url: "https://www.instagram.com/jp_batista20/" },
      { type: "whatsapp", url: "https://wa.me/55639999122501" }
    ]
  }
];
