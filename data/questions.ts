export interface Question {
  title: string;
  answer: string;
}

export const questions: Question[] = [
  {
    title: 'Com que frequência devo visitar o dentista?',
    answer:
      'Recomendamos visitas regulares ao dentista a cada 6 meses para check-ups de rotina e limpezas profissionais. No entanto, a frequência pode variar dependendo das suas necessidades específicas de saúde oral. O seu dentista pode recomendar visitas mais frequentes se tiver condições específicas que requeiram monitorização adicional.',
  },
  {
    title: 'Oferecem cuidados dentários de emergência?',
    answer:
      'Sim, oferecemos serviços de emergência dentária para situações urgentes como dores de dentes severas, dentes partidos, ou outras emergências orais. Entre em contacto connosco o mais rapidamente possível e faremos o nosso melhor para atendê-lo no mesmo dia.',
  },
  {
    title: 'As radiografias dentárias são seguras?',
    answer:
      'Sim, as radiografias dentárias são seguras quando realizadas com equipamento moderno e seguindo os protocolos adequados. A exposição à radiação é mínima e utilizamos proteções adequadas, como aventais de chumbo, para minimizar ainda mais a exposição. As radiografias são essenciais para diagnosticar problemas que não são visíveis a olho nu.',
  },
  {
    title: 'O que devo fazer se tiver uma dor de dentes?',
    answer:
      'Se tiver uma dor de dentes, contacte-nos imediatamente para marcar uma consulta de emergência. Enquanto isso, pode aliviar a dor com analgésicos de venda livre (seguindo as instruções do fabricante), aplicar uma compressa fria na área afetada, e evitar alimentos quentes ou frios. Evite colocar aspirina diretamente no dente ou gengiva.',
  },
  {
    title: 'Tratam crianças?',
    answer:
      'Sim, tratamos pacientes de todas as idades, incluindo crianças. Temos experiência em cuidados dentários pediátricos e criamos um ambiente acolhedor e confortável para os mais pequenos. Recomendamos que as crianças comecem a visitar o dentista por volta dos 2-3 anos de idade ou quando todos os dentes de leite tiverem erupcionado.',
  },
];
