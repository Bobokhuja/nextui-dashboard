import { Outlet } from 'react-router-dom'

import { useExpandActiveNavbar } from '../../lib'
import { NavigationItemType } from '../../model'
import { Navbar } from './navbar'

interface Props {
  navigationItems: NavigationItemType[]
}

export const AppLayout = ({ navigationItems }: Props) => {
  useExpandActiveNavbar(navigationItems)
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar items={navigationItems} />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
