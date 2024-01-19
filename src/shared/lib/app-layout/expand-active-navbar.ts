import { NavigationItemType } from '../../model'

interface Props {
  expand: (key: string) => void
  navigation: NavigationItemType[]
  pathname: string | null
}

export const expandActiveNavbar = ({ navigation, expand, pathname }: Props) => {
  if (navigation.length === 0) {
    return
  }
  navigation.forEach(({ path, children, parentKey }) => {
    if (path === pathname) {
      if (parentKey) {
        expand(parentKey)
      }
      return
    }
    expandActiveNavbar({
      pathname,
      expand,
      navigation: children || [],
    })
  })
}
