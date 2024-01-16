import { RouteType } from '@app/router/ui/route-type'
import { NotFound } from '@pages/not-found'

export const routes: RouteType[] = [
  {
    key: 'not-found',
    path: '*',
    element: <NotFound />,
    withoutLayout: true,
  },
]
