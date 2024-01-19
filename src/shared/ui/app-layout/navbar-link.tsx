import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/react'
import clsx from 'clsx'

import {
  navbarSelectorItem,
  NavigationItemType,
  toggleNavbarItem,
  useAppDispatch,
  useAppSelector,
} from '../../model'

interface Props {
  item: NavigationItemType
  subItem?: boolean
}

export const NavbarLink = ({ item, subItem }: Props) => {
  const { key, name, icon, path, children } = item
  const ButtonComponent = children?.length ? undefined : Link
  const { pathname } = useLocation()
  const { activeItem, expanded } = useAppSelector(navbarSelectorItem(key))
  const dispatch = useAppDispatch()

  const active = pathname === path

  const onPress = () => {
    if (children?.length) {
      dispatch(toggleNavbarItem(key))
    }
  }

  if (!expanded && !icon) {
    return null
  }

  return (
    <Button
      className={clsx('justify-start px-3')}
      fullWidth
      color={active ? 'primary' : 'default'}
      variant={active ? (subItem ? 'flat' : 'shadow') : 'light'}
      size={subItem ? 'md' : 'lg'}
      startContent={
        icon && (
          <Icon
            className="flex-shrink-0"
            fontSize={24}
            icon={icon}
          />
        )
      }
      isIconOnly={!expanded}
      endContent={
        expanded &&
        children &&
        children.length > 0 && (
          <Icon
            className={clsx('ml-auto transition', activeItem && 'rotate-90')}
            icon="mingcute:right-line"
          />
        )
      }
      as={ButtonComponent}
      to={path || '/'}
      onPress={onPress}
    >
      {expanded && name}
    </Button>
  )
}
