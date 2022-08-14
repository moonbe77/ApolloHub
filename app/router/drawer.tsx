import { HomeScreen, SettingsScreen, MapScreen } from '../screens'
import { DrawerNavigationOptions } from '@react-navigation/drawer'

export type RootDrawerParamList = {
  home: undefined
  settings: { sort: 'latest' | 'top' } | undefined
  mapping: undefined
}

interface drawerRoutes {
  name: keyof RootDrawerParamList
  title: string
  component: React.FC<any>
  options?: DrawerNavigationOptions
}

export const drawerRoutes: drawerRoutes[] = [
  {
    name: 'home',
    title: 'Home',
    component: HomeScreen,
    options: {
      headerShown: true,
      headerTitle: 'Home',
    },
  },
  {
    name: 'settings',
    title: 'Settings',
    component: SettingsScreen,
    options: {
      headerShown: true,
      headerTitle: 'Settings',
    },
  },
  {
    name: 'mapping',
    title: 'Mapping',
    component: MapScreen,
    options: {
      headerShown: true,
      headerTitle: 'Mapping',
    },
  },
]
