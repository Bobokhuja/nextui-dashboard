import { useEffect } from 'react'
import clsx from 'clsx'
import { useWindowSize } from 'usehooks-ts'

import {
  collapseNavbar,
  expandNavbar,
  hideNavbar,
  navbarSelector,
  NavigationItemType,
  showNavbar,
  useAppDispatch,
  useAppSelector,
} from '@shared/model'

import { NavbarBrand } from './navbar-brand'
import { NavbarItems } from './navbar-items'

interface NavbarProps {
  items: NavigationItemType[]
}

export const Navbar = ({ items }: NavbarProps) => {
  const { expanded, hidden } = useAppSelector(navbarSelector)
  const dispatch = useAppDispatch()
  const { width } = useWindowSize()

  const expand = () => {
    dispatch(expandNavbar())
    // dispatch(showNavbar())
  }
  const collapse = () => {
    if (width < 1024 || hidden) {
      dispatch(collapseNavbar())
    }
    // dispatch(hideNavbar())
  }

  const hide = () => {
    dispatch(hideNavbar())
  }
  const show = () => {
    dispatch(showNavbar())
  }

  useEffect(() => {
    if (width > 1024) {
      show()
    } else {
      hide()
    }
  }, [width])

  return (
    <>
      <div className={clsx(hidden && 'w-[80px]')} />
      <div
        onMouseEnter={expand}
        onMouseLeave={collapse}
        className={clsx(
          'shadow-2xl rounded-2xl h-full py-6 px-4 flex flex-col gap-6 transition-width transition bg-background',
          hidden && 'fixed left-0 z-50',
          expanded ? 'w-[320px]' : 'w-[80px]',
        )}
      >
        <NavbarBrand />
        <NavbarItems items={items} />
      </div>
    </>
  )
}
