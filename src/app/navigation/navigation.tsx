import { NavigationItemType } from '@shared/model'

export const navigation: NavigationItemType[] = [
  {
    key: 'main',
    name: 'Главная станица',
    path: '/',
    children: [
      {
        key: 'home',
        name: 'Главная',
        path: '/',
        parentKey: 'main',
      },
      {
        key: 'subitem-1',
        name: 'Subitem 1',
        path: '/subitem1',
        icon: 'material-symbols:home-outline',
        parentKey: 'main',
      },
      {
        key: 'subitem-2',
        name: 'Subitem 2',
        path: '/subitem2',
        icon: 'material-symbols:home-outline',
        parentKey: 'main',
      },
      {
        key: 'subitem-3',
        name: 'Subitem 3',
        path: '/subitem3',
        icon: 'material-symbols:home-outline',
        parentKey: 'main',
      },
    ],
    icon: 'iconamoon:home',
  },
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    children: [
      {
        key: 'dsubitem-1',
        name: 'Subitem 1',
        path: '/subitem1',
        icon: 'material-symbols:home-outline',
        parentKey: 'dashboard',
      },
      {
        key: 'dsubitem-2',
        name: 'Subitem 2',
        path: '/subitem2',
        icon: 'material-symbols:home-outline',
        parentKey: 'dashboard',
      },
      {
        key: 'dsubitem-3',
        name: 'Subitem 3',
        path: '/subitem3',
        icon: 'material-symbols:home-outline',
        parentKey: 'dashboard',
      },
    ],
    icon: 'material-symbols:home-outline',
  },
  {
    key: 'hello',
    name: 'Hello page',
    path: '/hello',
    icon: 'iconamoon:home',
  },
  {
    key: 'second-page',
    name: 'Second page',
    path: '/second-page',
  },
]
