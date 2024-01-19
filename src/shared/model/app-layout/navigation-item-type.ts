interface NavigationSubItemType extends NavigationItemType {
  parentKey: string
}

export interface NavigationItemType {
  key: string /** unique */
  icon?: string
  name: string
  path?: string
  children?: NavigationSubItemType[]
  parentKey?: string
}
