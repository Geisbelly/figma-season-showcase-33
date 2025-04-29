
interface Member {
  nome: string;
  curso: string;
  foto: string;
}

interface EditionMembers {
  ministrantes: Member[];
  assistentes: Member[];
}

interface MembersData {
  [key: string]: EditionMembers;
}

export const membersData: MembersData = {
  "2024.1": {
    ministrantes: [
      { nome: 'Geisbelly', curso: 'Ciência da Computação', foto: '/public/geisbelly.jpg' },
      { nome: 'Levi', curso: 'Ciência da Computação', foto: '/public/levi.jpeg' },
      { nome: 'Lucas', curso: 'Ciência da Computação', foto: '/public/lucas.jpg' }
    ],
    assistentes: [
    ]
  },
  "2024.2": {
    ministrantes: [
      { nome: 'Geisbelly', curso: 'Ciência da Computação', foto: '/public/geisbelly.jpg' },
      { nome: 'Levi', curso: 'Ciência da Computação', foto: '/public/levi.jpeg' },
      { nome: 'Lucas', curso: 'Ciência da Computação', foto: '/public/lucas.jpg' }
    ],
    assistentes: [
      { nome: 'Maria Clara', curso: 'Engenharia de Software', foto: '/public/maria.jpeg' },
      { nome: 'Samuel', curso: 'Design de Interface', foto: '/public/samuel.jpeg' },
      { nome: 'Ana', curso: 'Design Digital', foto: '/public/ana.jpeg' },
    ]
  },
  "2025.1": {
    ministrantes: [
      { nome: 'Fernando', curso: 'Design Digital', foto: '/public' },
      { nome: 'Juliana', curso: 'Ciência da Computação', foto: '/public/' }
    ],
    assistentes: [
      { nome: 'Ricardo', curso: 'Sistemas de Informação', foto: '/public/' },
      { nome: 'Beatriz', curso: 'Design', foto: '/public/' }
    ]
  }
};
