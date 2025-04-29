
export interface Lesson {
  title: string;
  description: string;
  type: "conceito" | "prática" | "desafio";
  duration: number; // in minutes
  difficulty: "iniciante" | "intermediário" | "avançado";
  edition: string;
  order: number;
}

export const lessonsData: Lesson[] = [
  {
    title: "Introdução ao Figma",
    description: "Aprenda a navegar na interface e entenda os conceitos básicos do Figma",
    type: "conceito",
    duration: 45,
    difficulty: "iniciante",
    edition: "2024.1",
    order: 1
  },
  {
    title: "Criando Formas Básicas",
    description: "Como criar e manipular formas básicas no Figma",
    type: "prática",
    duration: 60,
    difficulty: "iniciante",
    edition: "2024.1",
    order: 2
  },
  {
    title: "Trabalhando com Texto",
    description: "Aprenda a adicionar e formatar texto em seus designs",
    type: "prática",
    duration: 30,
    difficulty: "iniciante",
    edition: "2024.1",
    order: 3
  },
  {
    title: "Componentes no Figma",
    description: "Criando componentes reutilizáveis para acelerar seu fluxo de trabalho",
    type: "conceito",
    duration: 75,
    difficulty: "intermediário",
    edition: "2023.2",
    order: 1
  },
  {
    title: "Auto Layout",
    description: "Dominando auto layout para criar designs responsivos",
    type: "prática",
    duration: 90,
    difficulty: "intermediário",
    edition: "2023.2",
    order: 2
  },
  {
    title: "Protótipos Interativos",
    description: "Criando protótipos interativos para demonstrar o fluxo de usuário",
    type: "prática",
    duration: 120,
    difficulty: "avançado",
    edition: "2023.1",
    order: 1
  },
  {
    title: "Design System no Figma",
    description: "Construindo um design system completo e escalável",
    type: "desafio",
    duration: 180,
    difficulty: "avançado",
    edition: "2023.1",
    order: 2
  },
  {
    title: "Replicando o WhatsApp",
    description: "Projeto prático: Clonando a interface do WhatsApp",
    type: "desafio",
    duration: 240,
    difficulty: "intermediário",
    edition: "2024.1",
    order: 4
  }
];
