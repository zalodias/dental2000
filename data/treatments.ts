export interface Treatment {
  title: string;
  description: string;
}

export const treatments: Treatment[] = [
  {
    title: 'Higiene Oral',
    description:
      'Limpeza profissional que remove placa bacteriana e tártaro, prevenindo cáries, doenças gengivais e mantendo um sorriso saudável e fresco.',
  },
  {
    title: 'Obturações Dentárias',
    description:
      'Tratamento que repara dentes danificados por cáries, restaurando a forma, função e aparência natural com materiais resistentes e estéticos.',
  },
  {
    title: 'Coroas Dentárias',
    description:
      'Revestimento protetor colocado sobre dentes fragilizados ou danificados, devolvendo força, durabilidade e uma aparência natural ao sorriso.',
  },
  {
    title: 'Pontes Dentárias',
    description:
      'Solução fixa para substituir um ou mais dentes em falta, apoiada nos dentes adjacentes, garantindo conforto, estabilidade e estética.',
  },
  {
    title: 'Aparelhos Fixos',
    description:
      'Tratamento ortodôntico que alinha e corrige a posição dos dentes com precisão, melhorando a estética e a mordida de forma eficaz e duradoura.',
  },
  {
    title: 'Branqueamento Dentário',
    description:
      'Procedimento estético que clareia o tom dos dentes de forma segura e controlada, devolvendo brilho e confiança ao seu sorriso.',
  },
];
