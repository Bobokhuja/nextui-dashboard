import { lazy } from 'react'

export const NotFoundLazy = lazy(() =>
  import('./not-found').then(({ NotFound }) => ({ default: NotFound })),
)
