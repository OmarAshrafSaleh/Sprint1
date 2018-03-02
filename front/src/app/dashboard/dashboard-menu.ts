import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard',
   icon: 'nb-home', 
   link: '/login',
    home: true },
  {
    title: 'Items',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/items'
  },
  {
    title: 'store',
    icon: '	fa fa-shopping-bag',
  children:[
    {
      title: 'MainStore',
      icon: '	fa fa-th',
      link: '/dashboard/store/main'
    },
    
    {
      title: 'MyItems',
      icon: 'fa fa-shopping-basket',
      link: '/dashboard/store/myitems'
    }
  ]
}
];
