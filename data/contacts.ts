export interface Contact {
  name: string;
  phone: string;
  address: string;
}

export const contacts: Contact[] = [
  {
    name: 'Coimbra',
    phone: '(+351) 922 124 622',
    address: 'R. João de Ruão 5, 3000-153 Coimbra',
  },
  {
    name: 'Sertã',
    phone: '(+351) 922 133 517',
    address: 'Rua Vila de Rei 66 R/Ch, 6100-707 Sertã',
  },
];
