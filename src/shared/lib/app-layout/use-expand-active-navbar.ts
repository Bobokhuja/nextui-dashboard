import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  NavigationItemType,
  selectNavbarItem,
  useAppDispatch,
} from '../../model'
import { expandActiveNavbar } from './expand-active-navbar'

export const useExpandActiveNavbar = (navigation: NavigationItemType[]) => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()

  const expand = (key: string) => {
    dispatch(selectNavbarItem(key))
  }

  useEffect(() => {
    expandActiveNavbar({
      pathname,
      expand,
      navigation,
    })
  }, [navigation])
}
