export interface Service {
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    name: 'Implantologia',
    description:
      'Tratamento que substitui dentes perdidos através de implantes dentários resistentes e duradouros, devolvendo a função mastigatória e a estética natural do sorriso.',
  },
  {
    name: 'Ortodontia',
    description:
      'Corrige o alinhamento dos dentes e da mordida com aparelhos modernos e discretos, proporcionando um sorriso harmonioso, mais saúde oral e maior confiança no dia a dia.',
  },
  {
    name: 'Dentisteria',
    description:
      'Especialidade focada em restaurar dentes danificados por cáries, fraturas ou desgaste, recuperando a estética e a função, com materiais resistentes e resultados naturais.',
  },
  {
    name: 'Prótese Fixa',
    description:
      'Reposição de dentes ausentes com coroas e pontes fixas, devolvendo conforto, funcionalidade e um sorriso estético semelhante ao aspeto dos dentes naturais.',
  },
  {
    name: 'Odontopediatria',
    description:
      'Cuidados dentários especializados para crianças e adolescentes, promovendo hábitos saudáveis, prevenindo problemas futuros e garantindo sorrisos saudáveis desde cedo.',
  },
  {
    name: 'Endodontia',
    description:
      'Tratamento que elimina infeções da polpa dentária (canal), aliviando dores, preservando o dente natural e evitando extrações desnecessárias de forma segura e eficaz.',
  },
  {
    name: 'Periodontologia',
    description:
      'Prevenção e tratamento de doenças gengivais, como gengivite e periodontite, que podem comprometer dentes e gengivas, garantindo saúde e suporte a longo prazo.',
  },
  {
    name: 'Cirurgia Oral',
    description:
      'Intervenções cirúrgicas na cavidade oral, incluindo extrações de dentes, remoção de sisos e outros procedimentos necessários para a saúde oral e bem-estar.',
  },
];
