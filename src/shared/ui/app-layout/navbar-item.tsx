import { Spacer } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  navbarSelectorItem,
  NavigationItemType,
  useAppSelector,
} from '../../model'
import { NavbarItems } from './navbar-items'
import { NavbarLink } from './navbar-link'

interface Props {
  item: NavigationItemType
  subItem?: boolean
}

export const NavbarItem = ({ item, subItem }: Props) => {
  const { activeItem, expanded } = useAppSelector(navbarSelectorItem(item.key))

  return (
    <li>
      <NavbarLink
        item={item}
        subItem={subItem}
      />
      <AnimatePresence>
        {expanded &&
          activeItem &&
          item.children &&
          item.children.length > 0 && (
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
            >
              <Spacer y={2} />
              <NavbarItems
                subItems={true}
                items={item.children}
              />
            </motion.div>
          )}
      </AnimatePresence>
      <Spacer y={2} />
    </li>
  )
}
