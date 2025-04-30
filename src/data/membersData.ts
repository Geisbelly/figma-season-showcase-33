
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
      { nome: 'Geisbelly Victória', curso: 'Ciência da Computação', foto: '/geisbelly.jpg' },
      { nome: 'Levi Luz', curso: 'Ciência da Computação', foto: '/levi.jpeg' },
      { nome: 'João Lucas', curso: 'Ciência da Computação', foto: '/lucas.jpg' }
    ],
    assistentes: [
    ]
  },
  "2024.2": {
    ministrantes: [
      { nome: 'Geisbelly Victória', curso: 'Ciência da Computação', foto: '/geisbelly.jpg' },
      { nome: 'Levi Luz', curso: 'Ciência da Computação', foto: '/levi.jpeg' },
      { nome: 'João Lucas', curso: 'Ciência da Computação', foto: '/lucas.jpg' }
    ],
    assistentes: [
      { nome: 'Maria Clara Lima', curso: 'Ciência da Computação', foto: '/maria.jpeg' },
      { nome: 'Samuel Abade', curso: 'Engenharia de Softwares', foto: '/samuel.jpeg' },
      { nome: 'Ana Clara Zanetti', curso: 'Engenharia de Softwares', foto: '/ana.jpeg' },
    ]
  },
  "2025.1": {
    ministrantes: [
      { nome: 'Geisbelly Victória', curso: 'Ciência da Computação', foto: '/geisbelly.jpg' },
      { nome: 'Levi Luz', curso: 'Ciência da Computação', foto: '/levi.jpeg' },
      { nome: 'Maria Clara', curso: 'Ciência da Computação', foto: '/maria.jpeg' }
    ],
    assistentes: [
      { nome: 'Nicole França', curso: 'Engenharia de Softwares', foto: '/nicole.jpeg' },
      { nome: 'Ana Clara Zanetti', curso: 'Engenharia de Softwares', foto: '/ana.jpeg' },
      { nome: 'Samuel Abade', curso: 'Engenharia de Softwares', foto: '/samuel.jpeg' },
      { nome: 'João Pedro Batista', curso: 'Engenharia de Softwares', foto: '/jp.jpeg' },
      { nome: 'Guilherme Domiciano', curso: 'Engenharia de Softwares', foto: '/guilherme.jpeg' }
    ]
  }
};
