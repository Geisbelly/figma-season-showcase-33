
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
      { nome: 'Maria Clara', curso: 'Ciência da Computação', foto: '/public/maria.jpeg' },
      { nome: 'Samuel', curso: 'Engenharia de Softwares', foto: '/public/samuel.jpeg' },
      { nome: 'Ana', curso: 'Engenharia de Softwares', foto: '/public/ana.jpeg' },
    ]
  },
  "2025.1": {
    ministrantes: [
      { nome: 'Geisbelly', curso: 'Ciência da Computação', foto: '/public/geisbelly.jpg' },
      { nome: 'Levi', curso: 'Ciência da Computação', foto: '/public/levi.jpeg' },
      { nome: 'Maria Clara', curso: 'Ciência da Computação', foto: '/public/maria.jpeg' }
    ],
    assistentes: [
      { nome: 'Nicole', curso: 'Engenharia de Softwares', foto: '/public/nicole.jpeg' },
      { nome: 'Ana', curso: 'Engenharia de Softwares', foto: '/public/ana.jpeg' },
      { nome: 'Samuel', curso: 'Engenharia de Softwares', foto: '/public/samuel.jpeg' },
      { nome: 'João Pedro', curso: 'Engenharia de Softwares', foto: '/public/jp.jpeg' },
      { nome: 'Guilherme', curso: 'Engenharia de Softwares', foto: '/public/guilherme.jpeg' }
    ]
  }
};
