
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
      { nome: 'Carlos', curso: 'Design', foto: '/public/carlos.jpg' },
      { nome: 'Ana', curso: 'Sistemas de Informação', foto: '/public/ana.jpg' }
    ],
    assistentes: [
    ]
  },
  "2024.2": {
    ministrantes: [
      { nome: 'Carlos', curso: 'Design', foto: '/placeholder.svg' },
      { nome: 'Ana', curso: 'Sistemas de Informação', foto: '/placeholder.svg' }
    ],
    assistentes: [
      { nome: 'Paulo', curso: 'Engenharia de Software', foto: '/placeholder.svg' },
      { nome: 'Maria', curso: 'Design de Interface', foto: '/placeholder.svg' }
    ]
  },
  "2025.1": {
    ministrantes: [
      { nome: 'Fernando', curso: 'Design Digital', foto: '/placeholder.svg' },
      { nome: 'Juliana', curso: 'Ciência da Computação', foto: '/placeholder.svg' }
    ],
    assistentes: [
      { nome: 'Ricardo', curso: 'Sistemas de Informação', foto: '/placeholder.svg' },
      { nome: 'Beatriz', curso: 'Design', foto: '/placeholder.svg' }
    ]
  }
};
