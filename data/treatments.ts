export interface Treatment {
  name: string;
  description: string;
  image: string;
}

export const treatments: Treatment[] = [
  {
    name: 'Implantologia',
    description:
      'Tratamento que substitui dentes perdidos através de implantes dentários resistentes e duradouros, devolvendo a função mastigatória e a estética natural do sorriso.',
    image: 'https://picsum.photos/seed/200/1280/1920',
  },
  {
    name: 'Ortodontia',
    description:
      'Corrige o alinhamento dos dentes e da mordida com aparelhos modernos e discretos, proporcionando um sorriso harmonioso, mais saúde oral e maior confiança no dia a dia.',
    image: 'https://picsum.photos/seed/201/1280/1920',
  },
  {
    name: 'Dentisteria',
    description:
      'Especialidade focada em restaurar dentes danificados por cáries, fraturas ou desgaste, recuperando a estética e a função, com materiais resistentes e resultados naturais.',
    image: 'https://picsum.photos/seed/202/1280/1920',
  },
  {
    name: 'Prótese Fixa',
    description:
      'Reposição de dentes ausentes com coroas e pontes fixas, devolvendo conforto, funcionalidade e um sorriso estético semelhante ao aspeto dos dentes naturais.',
    image: 'https://picsum.photos/seed/203/1280/1920',
  },
  {
    name: 'Odontopediatria',
    description:
      'Cuidados dentários especializados para crianças e adolescentes, promovendo hábitos saudáveis, prevenindo problemas futuros e garantindo sorrisos saudáveis desde cedo.',
    image: 'https://picsum.photos/seed/204/1280/1920',
  },
  {
    name: 'Endodontia',
    description:
      'Tratamento que elimina infeções da polpa dentária (canal), aliviando dores, preservando o dente natural e evitando extrações desnecessárias de forma segura e eficaz.',
    image: 'https://picsum.photos/seed/205/1280/1920',
  },
  {
    name: 'Periodontologia',
    description:
      'Prevenção e tratamento de doenças gengivais, como gengivite e periodontite, que podem comprometer dentes e gengivas, garantindo saúde e suporte a longo prazo.',
    image: 'https://picsum.photos/seed/206/1280/1920',
  },
  {
    name: 'Cirurgia Oral',
    description:
      'Intervenções cirúrgicas na cavidade oral, incluindo extrações de dentes, remoção de sisos e outros procedimentos necessários para a saúde oral e bem-estar.',
    image: 'https://picsum.photos/seed/207/1280/1920',
  },
];
