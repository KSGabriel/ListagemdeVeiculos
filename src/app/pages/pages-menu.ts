import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Veículos',
    icon: 'color-palette-outline',
    children: [
      {
        title: 'Lista de Veículos',
        link: '/pages/products/products-list',
      }
    ],
  },
];
