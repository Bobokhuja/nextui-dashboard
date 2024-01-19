import { Icon } from '@iconify/react'
import { Button, Code } from '@nextui-org/react'
import Logo from '@public/vite.svg?react'

import {
  hideNavbar,
  navbarSelector,
  toggleNavbar,
  useAppDispatch,
  useAppSelector,
} from '../../model'

export const NavbarBrand = () => {
  const { expanded, hidden } = useAppSelector(navbarSelector)
  const dispatch = useAppDispatch()
  return (
    <div className="flex items-center gap-3 px-2">
      <Logo className="flex-shrink-0" />
      {expanded && (
        <>
          <span className="text-2xl">NextUI</span>
          <Code className="ml-auto">{APP_VERSION}</Code>
          <Button
            className="text-slate-400"
            isIconOnly
            onClick={() => {
              dispatch(toggleNavbar())
            }}
          >
            <Icon icon={`icon-park:${hidden ? 'left' : 'right'}`} />
          </Button>
        </>
      )}
    </div>
  )
}
