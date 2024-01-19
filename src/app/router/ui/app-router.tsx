import { Route, Routes } from 'react-router-dom'

import { routes } from '@app/router/routes'
import { AppLayout } from '@shared/ui'

import { navigation } from '../../navigation/navigation'
import { groupingRoutes } from '../lib/grouping-routes'
import { renderRoutes } from './render-routes'

const { withLayout, withoutLayout } = groupingRoutes(routes)

export const AppRouter = () => {
  return (
    <Routes>
      {/** layout route */}
      <Route
        path="/"
        element={<AppLayout navigationItems={navigation} />}
      >
        {renderRoutes(withLayout)}
      </Route>
      {renderRoutes(withoutLayout)}
    </Routes>
  )
}
