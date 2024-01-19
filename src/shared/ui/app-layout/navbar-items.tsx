import { NavigationItemType } from '../../model'
import { NavbarItem } from './navbar-item'

interface Props {
  items: NavigationItemType[]
  subItems?: boolean
}

export const NavbarItems = ({ items, subItems }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <NavbarItem
          key={item.name}
          subItem={subItems}
          item={item}
        />
      ))}
    </ul>
  )
}
